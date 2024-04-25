export type TextareaProps = {
    label?: string;
    placeholder?: string;
    className?: string;
    value?: string;
    name?: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
};
