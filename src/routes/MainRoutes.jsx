import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MyMatches from "../pages/MyMatches";
import Results from "../pages/Results";
import Profile from "../pages/Profile";
import MainLayout from "../layout/MainLayout";
import SignUp from "../auth/SignUp";
import Login from "../auth/Login";
import BrMatches from "../pages/BrMatches"
import MatcheDetails from "../pages/MatcheDetails";
import Wallet from "../pages/Wallet";
import ProfileEdit from "../pages/ProfileEdit";
import Withdraw from "../pages/Withdraw";
import Rules from "../pages/Rules";
import TopPlayers from "../pages/TopPlayers";
import ResultDetails from "../pages/ResultDetails";
import AddMoney from "../pages/AddMoney";
import TransactionHistory from "../pages/TransactionHistory";
import ClassSquad from "../pages/ClassSquad";
import LoneWolf from "../pages/LoneWolf";
import CsMatch from "../pages/CsMatch";
import FreeMatch from "../pages/FreeMatch";
import ClassSquadMatchDetails from "../pages/ClassSquadMatchDetails";
import LoneWolfRules from "../pages/LoneWolfRules";
import BrSquad from "../pages/BrSquad";
import BrSquadDetails from "../pages/BrSquadDetails";
import BrMatchJoin from "../pages/BrMatchJoin";
import ThankYou from "../pages/ThankYou";
import PrivateRoute from "./PrivateRoutes";
import ThankYou2 from "../pages/ThankYou2";
import JoinThanks from "../pages/JoinThanks";


const MainRoutes = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout />,
      children: [
         {
            path: '/',
            element: (
               <PrivateRoute>
                  <Home />
               </PrivateRoute>
            )
         },
         {
            path: '/results',
            element: (
               <PrivateRoute>
                  <Results />
               </PrivateRoute>
            )
         },
         {
            path: '/profile',
            element: (
               <PrivateRoute>
                  <Profile />
               </PrivateRoute>
            )
         },
         {
            path: '/my-matches',
            element: (
               <PrivateRoute>
                  <MyMatches />
               </PrivateRoute>
            )
         },
         {
            path: '/brmatches/:id',
            element: (
               <PrivateRoute>
                  <BrMatches />
               </PrivateRoute>
            )
         },
         {
            path: '/matchdetails/:id',
            element: (
               <PrivateRoute>
                  <MatcheDetails />
               </PrivateRoute>
            )
         },
         {
            path: '/wallet',
            element: (
               <PrivateRoute>
                  <Wallet />
               </PrivateRoute>
            )
         },
         {
            path: '/profile-edit',
            element: (
               <PrivateRoute>
                  <ProfileEdit />
               </PrivateRoute>
            )
         },
         {
            path: '/withdraw',
            element: (
               <PrivateRoute>
                  <Withdraw />
               </PrivateRoute>
            )
         },
         {
            path: '/rules',
            element: (
               <PrivateRoute>
                  <Rules />
               </PrivateRoute>
            )
         },
         {
            path: '/top-players',
            element: (
               <PrivateRoute>
                  <TopPlayers />
               </PrivateRoute>
            )
         },
         {
            path: '/resultdetails/:matchId',
            element: (
               <PrivateRoute>
                  <ResultDetails />
               </PrivateRoute>
            )
         },
         {
            path: '/addmoney',
            element: (
               <PrivateRoute>
                  <AddMoney />
               </PrivateRoute>
            )
         },
         {
            path: '/transaction-history',
            element: (
               <PrivateRoute>
                  <TransactionHistory />
               </PrivateRoute>
            )
         },
         {
            path: '/class-squad',
            element: (
               <PrivateRoute>
                  <ClassSquad />
               </PrivateRoute>
            )
         },
         {
            path: '/lone-wolf',
            element: (
               <PrivateRoute>
                  <LoneWolf />
               </PrivateRoute>
            )
         },
         {
            path: '/cs-match',
            element: (
               <PrivateRoute>
                  <CsMatch />
               </PrivateRoute>
            )
         },
         {
            path: '/free-match',
            element: (
               <PrivateRoute>
                  <FreeMatch />
               </PrivateRoute>
            )
         },
         {
            path: '/class-squad-details',
            element: (
               <PrivateRoute>
                  <ClassSquadMatchDetails />
               </PrivateRoute>
            )
         },
         {
            path: '/lone-wolf-details',
            element: (
               <PrivateRoute>
                  <LoneWolfRules />
               </PrivateRoute>
            )
         },
         {
            path: '/br-squad-match',
            element: (
               <PrivateRoute>
                  <BrSquad />
               </PrivateRoute>
            )
         },
         {
            path: '/br-squad-details',
            element: (
               <PrivateRoute>
                  <BrSquadDetails />
               </PrivateRoute>
            )
         },
         {
            path: '/br-match-join/:id',
            element: (
               <PrivateRoute>
                  <BrMatchJoin />
               </PrivateRoute>
            )
         },
         {
            path: '/thankyou-old',
            element: (
               <PrivateRoute>
                  <ThankYou />
               </PrivateRoute>
            )
         },


         // ❌ Leave login/signup as public

      ]
   },
   {
      path: '/thankyou',
      element: (
         <PrivateRoute>
            <ThankYou2 />
         </PrivateRoute>
      )
   },
   {
      path: '/joine-thanks/:id',
      element: <JoinThanks />
   },
   {
      path: '/signup',
      element: <SignUp />
   },
   {
      path: '/login',
      element: <Login />
   }
]);
export default MainRoutes;