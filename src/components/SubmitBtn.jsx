import { useNavigation } from "react-router-dom";
function SubmitBtn({ text }) {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    console.log(navigation, navigation.state);

    return (<button type="submit" className="btn btn-primary btn-block capitalize" disabled={isSubmitting}>
        {isSubmitting ? (<>
            <span className="loading loading-spinner" />
            sending...
        </>) : (text || 'submit')}
    </button>)
}

export default SubmitBtn;