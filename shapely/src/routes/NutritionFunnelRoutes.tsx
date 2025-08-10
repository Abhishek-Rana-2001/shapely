import { Route, Navigate } from "react-router-dom";
import NutritionGoals from "../pages/funnel/NutritionGoals";
import InsuranceBenefits from "../pages/funnel/InsuranceBenefits";
import YourState from "../pages/funnel/YourState";
import Testimonial from "../pages/funnel/Testimonial";
import InsurancePlan from "../pages/funnel/InsurancePlan";
import Dietitian from "../pages/funnel/Dietitian";
import YourBirthday from "../pages/funnel/YourBirthday";
import InsuranceDetails from "../pages/funnel/InsuranceDetails";
import CheckInformation from "../pages/funnel/CheckInformation";
import SelectDiagnoses from "../pages/funnel/SelectDiagnoses";
import SelfPay from "../pages/funnel/SelfPay";
import Match from "../pages/funnel/Match";
import NextSteps from "../pages/funnel/NextSteps";
import ThankYou from "../pages/funnel/ThankYou";
import CardInfo from "../pages/funnel/CardInfo";
import DateTimeSelector from "../pages/DateAndTimeSelector";

export default function NutritionFunnelRoutes() {
  return [
    <Route index element={<Navigate to="nutrition-goals" replace />} key="index" />,
    <Route path="nutrition-goals" element={<NutritionGoals />} key="nutrition-goals" />,
    <Route path="insurance-benefits" element={<InsuranceBenefits />} key="insurance-benefits" />,
    <Route path="your-state" element={<YourState />} key="your-state" />,
    <Route path="testimonial" element={<Testimonial />} key="testimonial" />,
    <Route path="insurance-plan" element={<InsurancePlan />} key="insurance-plan" />,
    <Route path="dietitian" element={<Dietitian />} key="dietitian" />,
    <Route path="your-birthday" element={<YourBirthday />} key="your-birthday" />,
    <Route path="insurance-details" element={<InsuranceDetails />} key="insurance-details" />,
    <Route path="check-information" element={<CheckInformation />} key="check-information" />,
    <Route path="diagnoses" element={<SelectDiagnoses />} key="diagnoses" />,
    <Route path="self-pay" element={<SelfPay />} key="self-pay" />,
    <Route path="match" element={<Match />} key="match" />,
    <Route path="scheduled-call" element={<DateTimeSelector isFromFunnel />} key="scheduled-call" />,
    <Route path="card-info" element={<CardInfo />} key="card-info" />,
    <Route path="thank-you" element={<ThankYou />} key="thank-you" />,
    <Route path="next-steps" element={<NextSteps />} key="next-steps" />
  ];
}
