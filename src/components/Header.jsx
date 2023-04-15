import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";

const Header = () => {
    return (
        <div>
            <h2>header</h2>
            <ConnectWallet/>
            <hr />
            <hr />
            <hr />
        </div>
    )
}

export default Header;