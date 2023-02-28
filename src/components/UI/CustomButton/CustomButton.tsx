import React, {FC} from 'react';

import styles from './CustomButton.module.scss';

interface CustomButtonProps {
    children: string
    background: string
}

const CustomButton: FC<CustomButtonProps> = (
    {
        children,
        background,
    }
) => {
    return (
        <button
            className={styles.customBtn}
            style={{background}}
        >
            {children}
        </button>
    );
};

export default CustomButton;