import { useLocation, Route, Routes } from 'react-router-dom'
import { context } from './../store'
import { useContext } from 'react';
import Navigation from "./Navigation"
import NoPage from "./NoPage"
import LandingPage from "./LandingPage"
import SingIn from "./Authentication/SingIn/index.jsx"
import SingUp from "./Authentication/SingUp/index.jsx"
import ProfilePage from './ProfilePage/index.jsx'
import UpdateProfile from './ProfilePage/update.jsx'
import SellCar from './SellCar/index.jsx'
import DoAuthentication from './DoAuthentication/index.jsx'
import CarDetails from './Car-details';


function AllComponents(props) {
    const state = useContext(context)
    const location = useLocation()
    return (
        <Routes location={location} key={location.pathname}>
            {
                state.currentUser?.username ?
                    <Route path="/" element={<Navigation />} >
                        {/* <Route index element={"дром"} /> */}\
                        <Route index element={<LandingPage />} />
                        <Route path="SingIn" element={<SingIn />} />
                        <Route path="SingUp" element={<SingUp />} />
                        <Route path="profile-page" element={<ProfilePage />} />
                        <Route path="update-profile" element={<UpdateProfile />} />
                        <Route path="sell-car" element={<SellCar />} />
                        <Route path="car/:id" element={<CarDetails />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                    :
                    <Route path="/" element={<Navigation />} >
                        {/* <Route index element={"дром"} /> */}\
                        <Route index element={<LandingPage />} />
                        <Route path="SingIn" element={<SingIn />} />
                        <Route path="SingUp" element={<SingUp />} />
                        <Route path="profile-page" element={<NoPage />} />
                        <Route path="update-profile" element={<NoPage />} />
                        <Route path="sell-car" element={<DoAuthentication />} />
                        <Route path="car/:id" element={<CarDetails />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
            }
        </Routes>
    );
}

export default AllComponents;