import React from "react"
import './footer.css'

const Footer = () => {

    return (
        <div className="footer-container" >
            <div className="footer-content">
                <div className="footer-col-1">
                    <h1 className="heading-title" >Join Our Discord</h1>
                    <h2 className="sub-heading">Where Members become creators</h2>
                    <p className="heading-desc">
                        Join us now on discord and be a part of the illuminati owl faimly 24/7 community, chat with the founders
                    </p>
                    <button className="btn-footer">
                        Join Discord
                    </button>
                </div>
                <div className="footer-col-2" >
                        <a href="https://twitter.com/illowlsNFT" target="_blank">
                            <i className="pi pi-twitter" ></i>
                        </a>
                        <a href="http://discord.gg/BFfBkHtU2P" target="_blank">
                            <i className="pi pi-discord" ></i>
                        </a>
                </div>
            </div>
            <p className="p-right">Copyright &copy; {new Date().getFullYear()} The Illuminati Group, All Right Reserved</p>

        </div>
    )
}

export default Footer;