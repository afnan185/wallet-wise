import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateNewGroup } from "../pages/createNewGroup";
import { GroupTripDetails } from "../pages/groupTripDetails";
import { Home } from "../pages/home";
import { AddExpense } from "../pages/addExpense";
import { Balance } from "../pages/balance";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-group" element={<CreateNewGroup />} />
        <Route path="/trip/:tripId" element={<GroupTripDetails />} />
        <Route path="/add-expense" element={<AddExpense />} />
        <Route path="/balances" element={<Balance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
