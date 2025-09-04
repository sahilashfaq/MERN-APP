import { Route, Routes as ReactRoutes, Navigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { AboutUs, Booking } from "../../features";
import { NotFound } from "../../features/PageNotFound";

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Navigate to="/about" replace />} />
      <Route path={ROUTES.ABOUT} element={<AboutUs />} />
      <Route path={ROUTES.BOOKING} element={<Booking />} />

      <Route path="*" element={<NotFound />} />
    </ReactRoutes>
  );
};
