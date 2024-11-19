export default function decorate(block) {
  const fetchData = async (url) => {
    let apiUrl = new URL(url);
    console.log(apiUrl);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const contries = block.querySelector('a[href$=".json"]');
  fetchData(contries.href);
  console.log(contries.href);
  console.log(block);
}
