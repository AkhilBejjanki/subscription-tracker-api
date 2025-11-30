import Subscription from "../models/subscription.model.js";

export const createSubscription = async (req, res, next ) => {
    try {
        const subscription = await Subscription.create( {
            ...req.body,
            user : req.user._id,
        });

        //const { workflowRunId } = await 

        res.status(201).json({ success : true, data : subscription });
    } catch(error) {
        next(error);
    }
}

export const getUserSubscriptions = async (req, res, next) => {
    try {

        // Check if the user is the same as the one in the token
        if(req.user.id !== req.params.id ) {
            const error = new Error("You're not the owner of the account");
            error.status = 404;
            throw error;
        }

        const subscriptions = await Subscription.find( { user : req.params.id });

        res.status(201).json({ success : true, data : subscriptions});
        
    } catch (error) {
        next(error);
    }
}