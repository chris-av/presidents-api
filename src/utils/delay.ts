export default function delay(seconds: number) {
  return new Promise((resolve, _) => {
    console.log(`waiting ${seconds} seconds ... \n`);
    setTimeout(() => {
      resolve('');
    }, seconds * 1000);
  });
}
