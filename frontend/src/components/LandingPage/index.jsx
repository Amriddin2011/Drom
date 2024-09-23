import Products from '../Products'
import './style.scss';

function LandingPage(props) {
    return (
        <main className="landing-page-wrapper">
            <h1>Cars sale in Uzbekistan!</h1>
            <div className="products">
                <Products />
            </div>
        </main>
    );
}

export default LandingPage;