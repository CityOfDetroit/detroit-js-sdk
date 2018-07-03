require("isomorphic-fetch");

async function getRentals(request) {
  try {
    const rentals = `https://data.detroitmi.gov/resource/vphr-kg52.geojson`;
    const certs = `https://data.detroitmi.gov/resource/baxk-dxw9.geojson`;

    let response = null;
    switch (request.type) {
        case 'polygon':
            console.log('polygon request');
            response = 'polygon';
            break;
        
        case 'parcel':
            console.log('parcel request');
            response = 'parcel';
            break;
    
        default:
            console.log('get all');
            response = 'all';
            break;
    }
    // const response = await fetch(url);
    // const data = await response.json();
    // const ordered = data.candidates
    //   .sort((a, b) => {
    //     return b.score - a.score;
    //   })
    //   .filter(candidate => candidate.attributes.Loc_name != "StreetCenterli");
    return response;
  } catch (err) {
    console.log(err);
  }
}

module.exports = getRentals;
