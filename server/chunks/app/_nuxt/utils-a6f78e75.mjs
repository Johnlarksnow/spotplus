function convertDate(stringDate) {
  const date = new Date(stringDate);
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}
const countryList = [
  { name: "Select a country", value: "select-a-country", disabled: true },
  { name: "Singapore", value: "SG" },
  { name: "Chile", value: "CL" },
  { name: "Nigeria", value: "NG" },
  { name: "United Arab Emirates", value: "AE" },
  { name: "El Salvador", value: "SV" },
  { name: "New Zealand", value: "NZ" },
  { name: "Spain", value: "ES" },
  { name: "Saudi Arabia", value: "SA" },
  { name: "Malaysia", value: "MY" },
  { name: "Australia", value: "AU" },
  { name: "Taiwan", value: "TW" },
  { name: "Pakistan", value: "PK" },
  { name: "Canada", value: "CA" },
  { name: "Brazil", value: "BR" },
  { name: "Argentina", value: "AR" },
  { name: "Tanzania", value: "TZ" },
  { name: "Poland", value: "PL" },
  { name: "United States", value: "US" },
  { name: "Finland", value: "FI" },
  { name: "Panama", value: "PA" },
  { name: "Kenya", value: "KE" },
  { name: "South Africa", value: "ZA" },
  { name: "Slovakia", value: "SK" },
  { name: "Costa Rica", value: "CR" },
  { name: "France", value: "FR" },
  { name: "Mexico", value: "MX" },
  { name: "Jordan", value: "JO" },
  { name: "Ireland", value: "IE" },
  { name: "Peru", value: "PE" },
  { name: "United Kingdom", value: "GB" },
  { name: "Sweden", value: "SE" },
  { name: "Turkey", value: "TR" },
  { name: "Norway", value: "NO" },
  { name: "Italy", value: "IT" },
  { name: "Colombia", value: "CO" },
  { name: "Indonesia", value: "ID" },
  { name: "Israel", value: "IL" }
];

export { countryList as a, convertDate as c };
//# sourceMappingURL=utils-a6f78e75.mjs.map
