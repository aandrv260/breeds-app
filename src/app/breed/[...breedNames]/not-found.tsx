import PageContent from '@/components/layout/PageContent';
import NoContent from '@/components/ui/NoContent';

const NotFound = () => {
  return (
    <PageContent heading="Not Found">
      <NoContent textColor="inherit">Breed gallery info not found</NoContent>
    </PageContent>
  );
};

export default NotFound;
