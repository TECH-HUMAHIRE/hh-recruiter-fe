import styled from 'styled-components';

const Style = styled.div`
    min-height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    .img {
        width: 216px;
        margin: auto;
        display: block;
        margin-bottom: 16px;
    }
    .notes {
        color: #666666;
        margin-bottom: 25px;
    }
    .btn-post {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        margin: auto;
        font-weight: 600;
        img {
            width: 20px;
            margin-right: 5px;
        }
    }
`;
export default Style;
