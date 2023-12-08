function createReservationDocument(nameofListing,reservationDates,reservationDetails){
    let reservation = {
        name:nameofListing,
        dates:reservationDates
    }

    for(let detail in reservationDetails){
        reservation[detail] = reservationDetails[detail];
    }

    return reservation;
}

