import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import PropTypes from 'prop-types';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

UpdateOrder.propTypes = {
  order: PropTypes.object,
};

export default UpdateOrder;

export async function action({ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);

  return null;
}
