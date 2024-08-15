import { useLocation, Route, Routes } from 'react-router-dom'
import Navigation from "./Navigation"
import NoPage from "./NoPage"
import LandingPage from "./LandingPage"
import SingIn from "./Authentication/SingIn/index.jsx"
import SingUp from "./Authentication/SingUp/index.jsx"

function AllComponents(props) {
    const location = useLocation()
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />} >
                {/* <Route index element={"дром"} /> */}\
                <Route index element={<LandingPage />} />
                <Route path="SingIn" element={<SingIn />} />
                <Route path="SingUp" element={<SingUp />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    );
}

export default AllComponents;