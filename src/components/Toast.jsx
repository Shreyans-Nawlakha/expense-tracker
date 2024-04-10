import PropTypes from "prop-types";
// const Toast = (message) => {
//   return (
//     <div>
//       <div className="bg-green-500 text-white rounded p-3 absolute top-0 right-0 mr-4 mb-4">
//             {message}
//         </div>
//     </div>
//   )
// }

const Toast = ({ message}) => {
    return (
        <div className="fixed top-10 right-5 z-50 opacity-30">
            <div className="bg-gray-500 text-white rounded-sm p-1 shadow-lg">
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        <p className="font-semibold">{message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// PropTypes
Toast.propTypes = {
    message: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired
};
export default Toast
