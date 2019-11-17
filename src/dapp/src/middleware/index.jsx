// Added from sample
import { generateStore, EventActions } from 'drizzle';
import drizzleOptions from '../drizzleOptions.jsx';
import { toast } from 'react-toastify';

const contractEventNotifier = store => next => action => {
    if (action.type === EventActions.EVENT_FIRED) {
        console.log(action);
        const contract = action.name;
        const contractEvent = action.event.event;
        const message = action.event.returnValues;
        const display = `${contract}(${contractEvent}): ${message}`;

        toast.success(display, { position: toast.POSITION.TOP_RIGHT });
    }
    return next(action)
}

const appMiddlewares = [contractEventNotifier]

export default generateStore({
    drizzleOptions,
    appMiddlewares,
    disableReduxDevTools: false  // enable ReduxDevTools!
})
