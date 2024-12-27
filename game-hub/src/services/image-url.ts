//Added this component to optimize the image loading process by cropping the image URL to the desired size
//so that users on a slow connection do not take too long to load the images since initially, the images are loaded in full size

const getCroppedImageUrl = (url: string) => {
    if (!url) return '';

    const target = "/media/";
    const index = url.indexOf(target);

    if (index === -1) return url;

    return url.slice(0, index + target.length) + "crop/600/400/" + url.slice(index + target.length);
};

export default getCroppedImageUrl;
