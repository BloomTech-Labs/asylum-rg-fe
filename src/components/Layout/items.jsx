// Links are absolute and will need to be changed if/when this app is add to the main site.

function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
}
const items = [
  getItem(<span title="Asylum Case Data">Case Data</span>, 'data', [
    getItem(
      <a href="/graphs" title="heatmap">
        Heat Map
      </a>,
      'data2'
    ),
  ]),
];
export default items;
