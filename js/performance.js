function print_PerformanceEntries() {
  var p = performance.getEntries();
  for (var i=0; i < p.length; i++) {
    print_PerformanceEntry(p[i]);
		log_sizes(p[i]);
  }
}
function print_PerformanceEntry(perfEntry) {
    if ("name" in perfEntry) {
      console.log(`name = ${perfEntry['name']}`);
    }
}

function log_sizes(perfEntry) {
	var properties = ["decodedBodySize", "encodedBodySize", "transferSize"];
	for (var i=0; i < properties.length; i++) {
    if (properties[i] in perfEntry) {
      var value = perfEntry[properties[i]];
      console.log(`${properties[i]} = ${value}`);
    }
  }
}

function init() {
		print_PerformanceEntries();
}

window.addEventListener('DOMContentLoaded', init);