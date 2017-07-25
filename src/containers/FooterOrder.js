import { connect } from "react-redux";
import Order from "../pages/Toko/Order";

const mapStateToProps = (state, ownProps) => {
  return {
    order: state.order,
    deliveryFee: state.cost
  };
};

const FooterOrder = connect(
  mapStateToProps
)(Order);

export default FooterOrder;
