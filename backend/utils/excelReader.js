const XLSX = require("xlsx");
const path = require("path");

function readExcel() {
  const filePath = path.join(__dirname, "../data/data.xlsx");

  const workbook = XLSX.readFile(filePath);

  return {
    issues: XLSX.utils.sheet_to_json(workbook.Sheets["issues"] || []),
    prs: XLSX.utils.sheet_to_json(workbook.Sheets["pull_requests"] || []),
    deployments: XLSX.utils.sheet_to_json(workbook.Sheets["deployments"] || []),
    bugs: XLSX.utils.sheet_to_json(workbook.Sheets["bugs"] || [])
  };
}

module.exports = readExcel;