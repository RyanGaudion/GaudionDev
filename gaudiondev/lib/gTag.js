//https://www.makeuseof.com/nextjs-google-analytics/

export const GA_MEASUREMENT_ID = "G-9N7KFV3730";

export const pageview = (url) => {
    window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
    });
};

export const event = ({ action, category, label, value }) => {
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value,
    });
};