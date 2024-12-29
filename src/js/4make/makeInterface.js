// makeInterface.js

function makeInterface()
{
    // mainDiv
    let mainDiv = ce('div');
    mainDiv.id = 'mainDiv';
    mainDiv.style.width = 300 + 'px';
    mainDiv.style.height = 300 + 'px';
    mainDiv.style.overflowY = 'scroll';
    mainDiv.style.border = 'solid 1px rgb(0, 0, 255)';
    mainDiv.style.borderRadius = '8px';
    ba(mainDiv);

    //-//

    // subDiv
    let subDiv = ce('div');
    subDiv.id = 'subDiv';
    mainDiv.append(subDiv);

    //-//

    // resultsContainer
    let resultsContainer = ce('div');
    resultsContainer.id = 'resultsContainer';
    resultsContainer.style.padding = 10 + 'px';
    subDiv.append(resultsContainer);

    //-//

    // loop through PEOPLE array
    for (let x = 0; x < PEOPLE.length; x++)
    {
        // firstName
        let firstName = ce('span');
        // if firstName exists in array
        if (PEOPLE[x].firstName)
        {
            firstName.textContent = PEOPLE[x].firstName;
        }
        else
        {
            firstName.textContent = 'Unknown First Name';
        }
        firstName.style.fontWeight = 'bold';
        firstName.style.color = 'rgb(0, 255, 255)';
        resultsContainer.append(firstName);

        //-//

        // space
        resultsContainer.append(ct(' '));

        //-//

        // lastName
        let lastName = ce('span');
        if (lastName.textContent = PEOPLE[x].lastName)
        {
            lastName.textContent = PEOPLE[x].lastName;
        }
        else
        {
            lastName.textContent = ' Unknown Last Name';
        }
        lastName.style.fontWeight = 'bold';
        lastName.style.color = 'rgb(0, 255, 255)';
        resultsContainer.append(lastName);

        //-//

        // type
        let type = ce('label');
        if (PEOPLE[x].type)
        {
            type.textContent = ' is a ' + PEOPLE[x].type;
        }
        else
        {
            type.textContent = ' Unknown Type';
        }
        type.style.color = 'rgb(255, 0, 255)';
        resultsContainer.append(type);

        //-//

        // major
        let major = ce('label');
        if (PEOPLE[x].major)
        {
            major.textContent = ' majors in ' + PEOPLE[x].major;
        }
        else
        {
            major.textContent = ' Unknown Major';
        }
        major.style.color = 'rgb(120, 120, 240)';
        resultsContainer.append(major);

        //-//

        // phoneNumberContainer
        let phoneNumberContainer = ce('div');
        phoneNumberContainer.style.paddingLeft = 10 + 'px';
        resultsContainer.append(phoneNumberContainer);

        //-//

        // if the entry has phoneNumbers
        if (PEOPLE[x].phoneNumbers)
        { 
            // loop through phoneNumbers
            for (let i = 0; i < PEOPLE[x].phoneNumbers.length; i++)
            {
                let phoneNumber = ce('div');
                phoneNumber.textContent = PEOPLE[x].phoneNumbers[i];
                phoneNumberContainer.append(phoneNumber);
            }
        }

        else
        {
            let response = ce('div');
            response.id = 'response';
            response.textContent = "No Phone Numbers Listed";
            phoneNumberContainer.append(response);
        }

        //-//

        resultsContainer.append(ce('hr'));

        //-//

        // if the entry has emails
        if (PEOPLE[x].emails)
        { 
            // loop through emails
            for (let i = 0; i < PEOPLE[x].emails.length; i++)
            {
                let email = ce('div');
                email.textContent = PEOPLE[x].emails[i];
                email.style.color = 'rgb(255, 255, 0)';
                phoneNumberContainer.append(email);
            }
        }

        else
        {
            let responseEmail = ce('div');
            responseEmail.id = 'responseEmail';
            responseEmail.textContent = "No Emails Listed";
            responseEmail.style.color = 'rgb(100, 100, 100)';
            phoneNumberContainer.append(responseEmail);
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

