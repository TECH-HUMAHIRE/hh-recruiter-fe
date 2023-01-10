import styled from 'styled-components';

const UploadStyle = styled.div`
    position: relative;
    .ant-upload,
    .ant-upload-list-picture-card-container {
        border-radius: 8px;
        width: 100%;
        height: ${(props) => props.height};
        border: unset;

        img {
            object-fit: cover;
        }
    }
    .background-upload {
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.1) 100%
        );
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 8px;
    }
    .label {
        position: absolute;
        bottom: 10px;
        right: 10px;
        background: #fff;
        padding: 7px;
        width: max-content;
        border-radius: 8px;
        color: #222222;
        z-index: 2;
        display: inline-flex;
    }
    .edit {
        width: 23px;
        margin-right: 5px;
    }
    .btn-upload {
        width: 100%;
        height: 100%;
        display: block;
        position: relative;
        z-index: 9;
        .defaultimage {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .ant-upload-list-item {
        padding: 0px;
        border-radius: 8px;
        border: unset;
        img {
            border-radius: 8px;
        }
    }
    .ant-upload-list-item-info {
        border-radius: 8px;
    }
`;
export default UploadStyle;
