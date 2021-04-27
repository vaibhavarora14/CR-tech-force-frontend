import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useHistory } from 'react-router';

function TrackPageView() {
    const history = useHistory();

    const submitPageTrackData = (location: any) => {
        ReactGA.set({ page: location.pathname })
        ReactGA.pageview(location.pathname)
    }

    useEffect(() => {
        submitPageTrackData(history.location)
        history.listen(location => {
            submitPageTrackData(location)
        })
    }, [history])

    return null
}

export default TrackPageView
