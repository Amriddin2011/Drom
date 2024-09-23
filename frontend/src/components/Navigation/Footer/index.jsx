import './style.scss';
import { Link } from 'react-router-dom'

function Footer() {
    return ( 
        <footer>
            <div className="applications">
                <div className="tiktok">
                    <img width={40} height={40} src="https://c.rdrom.ru/js/bundles/media/tiktok.daed86b53a1632b456cb.svg" loading="lazy" alt="TikTok of Drom" />
                </div>
                <div className="vk">
                    <img width={40} height={40} src="https://c.rdrom.ru/js/bundles/media/vk.cf5baa502cf20b865a52.svg" loading='lazy' alt="Drom in the vk" />
                </div>
                <div className="you-tube">
                    <img width={40} height={40} src="https://c.rdrom.ru/js/bundles/media/youtube.c4753a1dbbfcf8212062.svg" loading='lazy' alt="Chanal of Drom in the YouTube" />
                </div>
                <div className="telegram">
                    <img width={40} height={40} src="https://c.rdrom.ru/js/bundles/media/telegram.8c4fa8e6b41c8912063a.svg" loading='lazy' alt="Telegram of Drom" />
                </div>
                <div className="ok">
                    <img width={40} height={40} src="https://c.rdrom.ru/js/bundles/media/odnoklassniki.23b324d5d661360caacb.svg" loading='lazy' alt="Drom in the ok" />
                </div>
            </div>
            <div className="another-pages">
                <Link to={"#"}>About the project</Link>
                <Link to={"#"}>Help</Link>
                <Link to={"#"}>Rules</Link>
                <Link to={"#"}>For Media</Link>
            </div>
            <p>© 2024 Drom</p>
        </footer>
     );
}

export default Footer;