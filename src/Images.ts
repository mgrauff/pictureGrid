export function imgPromise(src: string) : Promise<HTMLImageElement> {
    return new Promise((res, rej) => {
        let image: HTMLImageElement = new Image();
        image.onload = () => res(image);
        image.onerror = rej;
        image.src = src;
    });
}