import configuration from './firebase_config';
import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';

const firebaseFn = (configs) => {
    if (!firebase.apps.length) {
        firebase.initializeApp(configuration.development);
    }
    return {
        database: (url) => {
            return firebase.firestore().collection(url);
        },
        get: async (query, getData) => {
            let listData = [];
            let total = await firebaseFn()
                .database(query.database)
                .get()
                .then((res) => res.size);

            let dataBaseCollection = firebaseFn()
                .database(query.database)
                .orderBy('createdAt', 'asc')
                .limit(query.limit);
            if (query.isLoadMore) {
                dataBaseCollection.startAfter(query.startAfterData);
            }
            dataBaseCollection.get().then((res) => {
                res.forEach((doc) => {
                    let data = doc.data();
                    listData.push({ ...data, id: doc.id });
                });
                let currentData = query.isFirstLoad
                    ? res.size
                    : query.currentData;
                getData({
                    data: listData,
                    lastData: listData[listData.length - 1].id,
                    total: total,
                    currentData: currentData,
                    isNext: total - currentData > 0 ? true : false
                });
            });
        },
        update: async (query) => {
            let dataBaseCollection = await firebaseFn().database(
                query.database
            );
            let result = {};
            result.status = false;
            result.message = 'no such document';
            const resultData = await dataBaseCollection
                .doc(query.slug)
                .get()
                .then((res) => {
                    if (!res.exists) {
                        return result;
                    }
                    delete result.message;
                    result.status = true;
                    result = { ...result, ...res.data() };

                    return result;
                })
                .catch((err) => {
                    return result;
                });

            if (resultData.status) {
                return await dataBaseCollection
                    .doc(query.slug)
                    .update({
                        wishes_data: resultData.wishes_data.concat(query.data)
                    })
                    .then((res) => {
                        return result;
                    })
                    .catch((err) => {
                        return result;
                    });
            }

            return resultData;
        },
        post: async (query) => {
            const { database, data, withDoc } = query;
            let databaseCollection = await firebaseFn().database(database);
            if (withDoc) {
                return await databaseCollection.doc(withDoc).set(data);
            }

            return await databaseCollection.add(data).then((ref) => {
                return ref.id;
            });

            // return false;
        },
        one: async (query) => {
            let dataBaseCollection = await firebaseFn().database(
                query.database
            );
            let result = {};
            result.key = query.key;
            result.status = false;
            result.message = 'no such document';
            if (query.withDoc) {
                return dataBaseCollection
                    .doc(query.withDoc)
                    .get()
                    .then((res) => {
                        if (!res.exists) {
                            return result;
                        }
                        delete result.message;
                        result.status = true;
                        result = { ...result, ...res.data() };
                        return result;
                    })
                    .catch((err) => {
                        return result;
                    });
            }

            return dataBaseCollection
                .where(query.field, query.operator, query.slug)
                .limit(1)
                .get()
                .then((res) => {
                    if (res.empty) {
                        return result;
                    }
                    delete result.message;
                    result.status = true;
                    res.forEach((res) => {
                        result = { ...result, ...res.data() };
                    });

                    return result;
                })
                .catch((err) => {
                    return result;
                });
        }
    };
};

export default firebaseFn;
