export async function getFluctuationData() {
    const data = await fetch(
        'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
    );

    return data.json();
}

export async function getCountriesData() {
    const data = await fetch('https://disease.sh/v3/covid-19/countries');
    return data.json();
}

export async function getAllStats() {
    const data = await fetch('https://disease.sh/v3/covid-19/all');
    return data.json();
}
