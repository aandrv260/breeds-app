import ROUTES from '@/constants/routes';
import { redirect } from 'next/navigation';

const NotFoundPage = () => {
  return redirect(ROUTES.breedListing);
};

export default NotFoundPage;
