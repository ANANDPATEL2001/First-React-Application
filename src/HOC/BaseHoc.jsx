import React from "react";

const BaseHoc = () =>
    (Component) =>
        ({ ...props }) => {
            return (
                <div>
                    <h2>This is the Navbar</h2>
                    <Component {...props} />
                    <h2>This is the Footer</h2>
                </div>
            );
        };

export default BaseHoc;