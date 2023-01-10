/* eslint-disable react/prop-types */
import React from 'react';
import Style from './input-html.style';
import ReactQuill from 'react-quill';

const FormHTML = ({
    maxLength = 2000,
    height,
    placeholder,
    onChange = () => {},
    value
}) => {
    const [editorValue, setEditorValue] = React.useState('');
    const module = {
        toolbar: [
            ['bold', 'italic'],
            [{ list: 'ordered' }, { list: 'bullet' }]
        ]
    };
    const format = [
        'bold',
        'color',
        'font',
        'code',
        'italic',
        'size',
        'strike',
        'underline',
        'indent',
        'list',
        'direction',
        'formula'
    ];

    const handleEditorChange = (content) => {
        setEditorValue(content);
        onChange(content);
    };

    return (
        <Style height={height}>
            <ReactQuill
                value={value}
                formats={format}
                modules={module}
                l
                onChange={handleEditorChange}
            />
            {maxLength && (
                <span className={'text-character'}>
                    {editorValue.replace(/(<([^>]+)>)/gi, '').length}/
                    {maxLength}
                </span>
            )}
        </Style>
    );
};
export default FormHTML;
