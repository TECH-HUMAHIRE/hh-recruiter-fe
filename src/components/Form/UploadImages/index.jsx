import { Form, Modal, Upload } from 'antd';
import React, { useState } from 'react';
import defaultImage from '../../Assets/images/defaultImage.png';
import iconEdit from '../../Assets/icon/edit.png';
import UploadStyle from './upload-image.style';
const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        // reader.onerror = (error) => reject(error);
    });
const UploadImages = (props) => {
    const {
        height,
        maxCount,
        label,
        width = '100%',
        onChange = () => {}
    } = props;
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([]);
    // eslint-disable-next-line
    const handleCancel = () => setPreviewOpen(false);
    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess('ok');
        }, 0);
    };
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(
            file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
        );
    };
    const handleChange = async (info) => {
        setFileList(info.fileList);
        onChange(info.fileList);
    };
    const onRemove = () => {
        onChange([]);
    };
    return (
        <UploadStyle height={height}>
            <Upload
                customRequest={dummyRequest}
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onRemove={onRemove}
                onChange={handleChange}
                accept="image/*"
                maxCount={maxCount}
                style={{ width: '100%', objectFit: 'cover' }}>
                {fileList.length <= maxCount - 1 && (
                    <div className="btn-upload">
                        <img
                            alt={previewTitle}
                            className="defaultimage"
                            src={defaultImage}
                        />
                        <div className="label">
                            <img className="edit" src={iconEdit} alt="Edit" />{' '}
                            {label}
                        </div>

                        <div className="background-upload"></div>
                    </div>
                )}
            </Upload>
            {/* </ImgCrop> */}

            <Modal
                open={previewOpen}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
                width="max-content">
                <img
                    alt={previewTitle}
                    style={{
                        width: width,
                        height: height
                    }}
                    src={previewImage}
                />
            </Modal>
        </UploadStyle>
    );
};
export default UploadImages;
