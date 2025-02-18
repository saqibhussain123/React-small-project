import React, { useState } from 'react';

function Toggle() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div onClick={toggle} style={{ cursor: 'pointer' }}>
                <span>Menu</span>
            </div>

            {isOpen ? (
                <div>
                    <p>Hello from Toggle</p>
                    <div onClick={toggle} style={{ cursor: 'pointer', color: 'red' }}>
                        x
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default Toggle;
