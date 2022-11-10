
import aa from "search-insights";
// import { createInsightsMiddleware } from 'instantsearch.js/es/middlewares';

// const insightsMiddleware = createInsightsMiddleware({
//     insightsClient: aa,
// });

// search.use(insightsMiddleware);

const AlgoliaInitialize = () => {
    //   console.log("Initialized Algolia Analytics");
    aa("init", {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
    });
};

const PostViewed = (
    objectIds
) => {
    // console.log(process.env.ALGOLIA_INDEX_NAME, objectIds);
    aa('viewedObjectIDs', {
        userToken: "user-1", // required for Node.js
        index: process.env.ALGOLIA_INDEX_NAME,
        eventName: 'PostViewed',
        eventType: 'view',
        objectIDs: [...objectIds]
    });
};

export default AlgoliaInitialize;
export { AlgoliaInitialize, PostViewed };

