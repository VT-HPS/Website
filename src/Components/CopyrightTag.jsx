import React, { useState } from "react";
/**
 * Creates a copyright tag that is always displayed at the foot
 * of the page.
 */
function DisplayCopyrightTag() {
    return (
        <footer className="footer">
                <div class="text-left px-5">
                    <small>Copyright &copy; 2023 HPS at Virginia Tech | hps@vt.edu</small>
                </div>
        </footer>
    )
}

export default DisplayCopyrightTag;