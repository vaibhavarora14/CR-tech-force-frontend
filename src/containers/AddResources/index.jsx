import { Button, MenuItem, TextField, Typography, withStyles, withTheme } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab';
import React, {Component} from 'react'
import { isTypeNode } from 'typescript';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    headingRoot: {
        background: theme.palette.primary.main,
        width: '100%',
        padding: theme.spacing(4.75, 5.5, 10.25),
        display: 'flex',
        flexDirection: 'column',
        color: '#fff',
        alignItems: 'center',
        textAlign: 'center',
    },
    formRoot: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '418px',
        width: '100%',
        marginTop: theme.spacing(7),
        
        '& > *': {
            marginBottom: theme.spacing(1),
        },
        alignItems: 'center'
    }
})

const states = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh',
    'Chhattisgarh',
    'Dadra And Nagar Haveli (Union Territory)',
    'Daman And Diu (Union Territory)',
    'Delhi (National Capital Territory)',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu And Kashmir (Union Territory)',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Ladakh',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Nagaland',
    'Odisha',
    'Pondicherry',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal'  
]

const cities = {
    "Andhra Pradesh": [
        'Adoni',
        'Amaravati',
        'Anantapur',
        'Chandragiri',
        'Chittoor',
        'Dowlaiswaram',
        'Eluru',
        'Guntur',
        'Kadapa',
        'Kakinada',
        'Kurnool',
        'Machilipatnam',
        'Nagarjunakoṇḍa',
        'Rajahmundry',
        'Srikakulam',
        'Tirupati',
        'Vijayawada',
        'Visakhapatnam',
        'Vizianagaram',
        'Yemmiganur'
    ],
    'Arunachal Pradesh': [
        'Itanagar'
    ],
    'Assam': [
        'Dhuburi',
        'Dibrugarh',
        'Dispur',
        'Guwahati',
        'Jorhat',
        'Nagaon',
        'Sibsagar',
        'Silchar',
        'Tezpur',
        'Tinsukia',
    ],
    'Bihar': [
        'Ara',
        'Baruni',
        'Begusarai',
        'Bettiah',
        'Bhagalpur',
        'Bihar Sharif',
        'Bodh Gaya',
        'Buxar',
        'Chapra',
        'Darbhanga',
        'Dehri',
        'Dinapur Nizamat',
        'Gaya',
        'Hajipur',
        'Jamalpur',
        'Katihar',
        'Madhubani',
        'Motihari',
        'Munger',
        'Muzaffarpur',
        'Patna',
        'Purnia',
        'Pusa',
        'Saharsa',
        'Samastipur',
        'Sasaram',
        'Sitamarhi',
        'Siwan',
    ],
    'Chandigarh': [
        'Chandigarh'
    ],
    'Chhattisgarh': [
        'Ambikapur',
        'Bhilai',
        'Bilaspur',
        'Dhamtari',
        'Durg',
        'Jagdalpur',
        'Raipur',
        'Rajnandgaon',
    ],
    'Dadra And Nagar Haveli (Union Territory)': [
        'Silvassa'
    ],
    'Daman And Diu (Union Territory)': [
        'Daman',
        'Diu',
    ],
    'Delhi (National Capital Territory)': [
        'Old Delhi',
        'New Delhi',
    ],
    'Goa': [
        'Madgaon',
        'Panaji'
    ],
    'Gujarat': [
        'Ahmadabad',
        'Amreli',
        'Bharuch',
        'Bhavnagar',
        'Bhuj',
        'Dwarka',
        'Gandhinagar',
        'Godhra',
        'Jamnagar',
        'Junagadh',
        'Kandla',
        'Khambhat',
        'Kheda',
        'Mahesana',
        'Morvi',
        'Nadiad',
        'Navsari',
        'Okha',
        'Palanpur',
        'Patan',
        'Porbandar',
        'Rajkot',
        'Surat',
        'Surendranagar',
        'Valsad',
        'Veraval',
    ],
    'Haryana': [
        'Ambala',
        'Bhiwani',
        'Chandigarh',
        'Faridabad',
        'Firozpur Jhirka',
        'Gurgaon',
        'Hansi',
        'Hisar',
        'Jind',
        'Kaithal',
        'Karnal',
        'Kurukshetra',
        'Panipat',
        'Pehowa',
        'Rewari',
        'Rohtak',
        'Sirsa',
        'Sonipat',
    ],
    'Himachal Pradesh': [
        'Bilaspur',
        'Chamba',
        'Dalhousie',
        'Dharmshala',
        'Hamirpur',
        'Kangra',
        'Kullu',
        'Mandi',
        'Nahan',
        'Shimla',
        'Una',
    ],
    'Jammu And Kashmir (Union Territory)': [
        'Anantnag',
        'Baramula',
        'Doda',
        'Gulmarg',
        'Jammu',
        'Kathua',
        'Punch',
        'Rajauri',
        'Srinagar',
        'Udhampur',
    ],
    'Jharkhand': [
        'Bokaro',
        'Chaibasa',
        'Deoghar',
        'Dhanbad',
        'Dumka',
        'Giridih',
        'Hazaribag',
        'Jamshedpur',
        'Jharia',
        'Rajmahal',
        'Ranchi',
        'Saraikela',
    ],
    'Karnataka': [
        'Badami',
        'Ballari',
        'Bangalore',
        'Belgavi',
        'Bhadravati',
        'Bidar',
        'Chikkamagaluru',
        'Chitradurga',
        'Davangere',
        'Halebid',
        'Hassan',
        'Hubballi-Dharwad',
        'Kalaburagi',
        'Kolar',
        'Madikeri',
        'Mandya',
        'Mangaluru',
        'Mysuru',
        'Raichur',
        'Shivamogga',
        'Shravanabelagola',
        'Shrirangapattana',
        'Tumkuru',
    ],
    'Kerala': [
        'Alappuzha',
        'Badagara',
        'Idukki',
        'Kannur',
        'Kochi',
        'Kollam',
        'Kottayam',
        'Kozhikode',
        'Mattancheri',
        'Palakkad',
        'Thalassery',
        'Thiruvananthapuram',
        'Thrissur',
    ],
    'Ladakh': [
        'Kargil',
        'Leh',
    ],
    'Madhya Pradesh': [
        'Balaghat',
        'Barwani',
        'Betul',
        'Bharhut',
        'Bhind',
        'Bhojpur',
        'Bhopal',
        'Burhanpur',
        'Chhatarpur',
        'Chhindwara',
        'Damoh',
        'Datia',
        'Dewas',
        'Dhar',
        'Guna',
        'Gwalior',
        'Hoshangabad',
        'Indore',
        'Itarsi',
        'Jabalpur',
        'Jhabua',
        'Khajuraho',
        'Khandwa',
        'Khargon',
        'Maheshwar',
        'Mandla',
        'Mandsaur',
        'Mhow',
        'Morena',
        'Murwara',
        'Narsimhapur',
        'Narsinghgarh',
        'Narwar',
        'Neemuch',
        'Nowgong',
        'Orchha',
        'Panna',
        'Raisen',
        'Rajgarh',
        'Ratlam',
        'Rewa',
        'Sagar',
        'Sarangpur',
        'Satna',
        'Sehore',
        'Seoni',
        'Shahdol',
        'Shajapur',
        'Sheopur',
        'Shivpuri',
        'Ujjain',
        'Vidisha',
    ],
    'Maharashtra': [
        'Ahmadnagar',
        'Akola',
        'Amravati',
        'Aurangabad',
        'Bhandara',
        'Bhusawal',
        'Bid',
        'Buldana',
        'Chandrapur',
        'Daulatabad',
        'Dhule',
        'Jalgaon',
        'Kalyan',
        'Karli',
        'Kolhapur',
        'Mahabaleshwar',
        'Malegaon',
        'Matheran',
        'Mumbai',
        'Nagpur',
        'Nanded',
        'Nashik',
        'Osmanabad',
        'Pandharpur',
        'Parbhani',
        'Pune',
        'Ratnagiri',
        'Sangli',
        'Satara',
        'Sevagram',
        'Solapur',
        'Thane',
        'Ulhasnagar',
        'Vasai-Virar',
        'Wardha',
        'Yavatmal',
    ],
    'Manipur': [
        'Imphal'
    ],
    'Meghalaya': [
        'Cherrapunji',
        'Shillong',
        'Mizoram',
        'Aizawl',
        'Lunglei',
    ],
    'Nagaland': [
        'Kohima',
        'Mon',
        'Phek',
        'Wokha',
        'Zunheboto'
    ],
    'Odisha': [
        'Balangir',
        'Baleshwar',
        'Baripada',
        'Bhubaneshwar',
        'Brahmapur',
        'Cuttack',
        'Dhenkanal',
        'Keonjhar',
        'Konark',
        'Koraput',
        'Paradip',
        'Phulabani',
        'Puri',
        'Sambalpur',
        'Udayagiri',
    ],
    'Pondicherry': [
        'Karaikal',
        'Mahe',
        'Pondicherry',
        'Yanam',
    ],
    'Punjab': [
        'Amritsar',
        'Batala',
        'Chandigarh',
        'Faridkot',
        'Firozpur',
        'Gurdaspur',
        'Hoshiarpur',
        'Jalandhar',
        'Kapurthala',
        'Ludhiana',
        'Nabha',
        'Patiala',
        'Rupnagar',
        'Sangrur',
    ],
    'Rajasthan': [
        'Abu',
        'Ajmer',
        'Alwar',
        'Amer',
        'Barmer',
        'Beawar',
        'Bharatpur',
        'Bhilwara',
        'Bikaner',
        'Bundi',
        'Chittaurgarh',
        'Churu',
        'Dhaulpur',
        'Dungarpur',
        'Ganganagar',
        'Hanumangarh',
        'Jaipur',
        'Jaisalmer',
        'Jalor',
        'Jhalawar',
        'Jhunjhunu',
        'Jodhpur',
        'Kishangarh',
        'Kota',
        'Merta',
        'Nagaur',
        'Nathdwara',
        'Pali',
        'Phalodi',
        'Pushkar',
        'Sawai Madhopur',
        'Shahpura',
        'Sikar',
        'Sirohi',
        'Tonk',
        'Udaipur',
    ],
    'Sikkim': [
        'Gangtok',
        'Gyalsing',
        'Lachung',
        'Mangan',
    ],
    'Tamil Nadu': [
        'Arcot',
        'Chengalpattu',
        'Chennai',
        'Chidambaram',
        'Coimbatore',
        'Cuddalore',
        'Dharmapuri',
        'Dindigul',
        'Erode',
        'Kanchipuram',
        'Kanniyakumari',
        'Kodaikanal',
        'Kumbakonam',
        'Madurai',
        'Mamallapuram',
        'Nagappattinam',
        'Nagercoil',
        'Palayankottai',
        'Pudukkottai',
        'Rajapalaiyam',
        'Ramanathapuram',
        'Salem',
        'Thanjavur',
        'Tiruchchirappalli',
        'Tirunelveli',
        'Tiruppur',
        'Tuticorin',
        'Udhagamandalam',
        'Vellore',
    ],
    'Telangana': [
        'Hyderabad',
        'Karimnagar',
        'Khammam',
        'Mahbubnagar',
        'Nizamabad',
        'Sangareddi',
        'Warangal',
    ],
    'Tripura': [
        'Agartala',
    ],
    'Uttar Pradesh': [
        'Agra',
        'Aligarh',
        'Amroha',
        'Ayodhya',
        'Azamgarh',
        'Bahraich',
        'Ballia',
        'Banda',
        'Bara Banki',
        'Bareilly',
        'Basti',
        'Bijnor',
        'Bithur',
        'Budaun',
        'Bulandshahr',
        'Deoria',
        'Etah',
        'Etawah',
        'Faizabad',
        'Farrukhabad-cum-Fatehgarh',
        'Fatehpur',
        'Fatehpur Sikri',
        'Ghaziabad',
        'Ghazipur',
        'Gonda',
        'Gorakhpur',
        'Hamirpur',
        'Hardoi',
        'Hathras',
        'Jalaun',
        'Jaunpur',
        'Jhansi',
        'Kannauj',
        'Kanpur',
        'Lakhimpur',
        'Lalitpur',
        'Lucknow',
        'Mainpuri',
        'Mathura',
        'Meerut',
        'Mirzapur-Vindhyachal',
        'Moradabad',
        'Muzaffarnagar',
        'Partapgarh',
        'Pilibhit',
        'Prayagraj',
        'Rae Bareli',
        'Rampur',
        'Saharanpur',
        'Sambhal',
        'Shahjahanpur',
        'Sitapur',
        'Sultanpur',
        'Tehri',
        'Varanasi',
    ],
    'Uttarakhand': [
        'Almora',
        'Dehra Dun',
        'Haridwar',
        'Mussoorie',
        'Nainital',
        'Pithoragarh',
    ],
    'West Bengal': [
        'Alipore',
        'Alipur Duar',
        'Asansol',
        'Baharampur',
        'Bally',
        'Balurghat',
        'Bankura',
        'Baranagar',
        'Barasat',
        'Barrackpore',
        'Basirhat',
        'Bhatpara',
        'Bishnupur',
        'Budge Budge',
        'Burdwan',
        'Chandernagore',
        'Darjiling',
        'Diamond Harbour',
        'Dum Dum',
        'Durgapur',
        'Halisahar',
        'Haora',
        'Hugli',
        'Ingraj Bazar',
        'Jalpaiguri',
        'Kalimpong',
        'Kamarhati',
        'Kanchrapara',
        'Kharagpur',
        'Koch Kolkata',
        'Krishnanagar',
        'Malda',
        'Midnapore',
        'Murshidabad',
        'Navadwip',
        'Palashi',
        'Panihati',
        'Purulia',
        'Raiganj',
        'Santipur',
        'Shantiniketan',
        'Shrirampur',
        'Siliguri',
        'Siuri',
        'Tamluk',
        'Titagarh',
    ]
    
}


const resourceTypes = [
    'Oxygen',
    'Hospital Beds',
    'Medicines/Injections',
    'Blood',
    'Home Care',
    'Testing',
    'Food / Tiffin'
];

const resourceSubtypes = {
    'Oxygen': [
        'New Cylinder', 
        'Refill', 
        'Concentrator'
    ],
    'Hospital Beds': [
        'ICU Bed', 'Ventilator Bed', 'Oxygen Beds', 'Non-Oxygen Beds'
    ],
    'Medicines/Injections': [
        'Remdesivir', 'Fabiflu', 'Tocilizumab'
    ],
    'Blood': [
        'Plasma', 'Blood'
    ],
    'Home Care': [
        'Home ICU Setup', 'Nursing Staff'
    ],
    'Testing': [
        'Home Testing', 'Lab Testing'
    ],
    'Food / Tiffin': [
        'Tiffin Service', 'Meal Provider'
    ],
}


const ADD_TICKET = gql`
  mutation(
    $state: String
    $city: String
    $address: String
    $supplierDonorName: String
    $supplierDonorContactNumber: String
    $resourceType: String
    $subResourceType: String
    $costPerUnit: String
    $availableUnits: String
    $otherInfo: String
  ) {
    createTicket(input: {
        state: $state,
        city: $city,
        address: $address,
        supplierDonorName: $supplierDonorName,
        supplierDonorContactNumber: $supplierDonorContactNumber,
        resourceType: $resourceType,
        costPerUnit: $costPerUnit,
        availableUnits: $availableUnits,
        subResourceType: $subResourceType,
        otherInfo: $otherInfo
    }) {
      status
    }
  }
`;


class AddResources extends Component {

    state = {
        city: '',
        state: '',
        location: '',
        resource_type: '',
        resource_subtype: '',
        availability: null,
        cost_per_unit: null,
        contact_number: null,
        contact_name: null,
        lead_source: null,

        cityError: false,
        stateError: false,
        resourceError: false,
        subResourceError: false,
        nameError: false,
        numberError: false,
    }


    checkDataAndSubmit() {
        const {city, state, location, resource_type, resource_subtype, availability, cost_per_unit, contact_number, contact_name, lead_source} = this.state;
        if (!city) this.setState({cityError: true})
        if (!state) this.setState({stateError: true})
        if (!resource_type) this.setState({resourceError: true})
        if (!resource_subtype) this.setState({subResourceError: true})
        if (!contact_name) this.setState({nameError: true})
        if (!contact_number) this.setState({numberError: true})
    }

    render() {
        const {classes, theme} = this.props;
        const {city, state, location, resource_type, resource_subtype, availability, cost_per_unit, contact_number, contact_name, lead_source, cityError, stateError, resourceError, subResourceError, nameError, numberError} = this.state;
        return (
            <div className={classes.root}>
                <div className={classes.headingRoot}>
                    <Typography variant='h5'>Add Verified Information</Typography>
                    <Typography variant='body1' style={{marginTop: theme.spacing(3), opacity: 0.6, maxWidth: theme.spacing(67.75)}}>
                        Every information / lead suggested by you could end up saving someon’e life. We sincerely thank you from the bottom of our hearts. Please fill the form below to add information.Our team of volunteers will verify the details before publishing.
                    </Typography>
                </div>
                <div className={classes.formRoot}>
                    <Autocomplete
                        options={states}
                        getOptionLabel={(option) => option}
                        style={{width: '100%'}}
                        onChange={(event, state) => this.setState({state, city: '', cityError: false, stateError: false})}
                        renderInput={(params) => <TextField {...params} error={stateError} label="State" variant="outlined" required />}
                        />

                    <Autocomplete
                        options={ cities[state] || []}
                        disabled={state in cities ? false : true}
                        getOptionLabel={(option) => option}
                        style={{width: '100%'}}
                        onChange={(event, city) => this.setState({city, cityError: false})}
                        renderInput={(params) => <TextField {...params} error={cityError} label="City" variant="outlined" required/>}
                        />

                    <TextField style={{width: '100%'}} variant='outlined' rows={5} label='Address' multiline value={location} onChange={(e) => this.setState({location: e.target.value})} />

                    <TextField
                        select
                        
                        error={resourceError}
                        style={{width: '100%'}}
                        variant='outlined'
                        value={resource_type}
                        label='Resource Type'
                        onChange={(event) => this.setState({resource_type: event.target.value})}
                        >
                            {resourceTypes.map(type => (
                                <MenuItem value={type} key={type}>
                                    {type}
                                </MenuItem>
                            ))}
                    </TextField>


                    <TextField
                        select
                        error={subResourceError}
                        variant='outlined'
                        style={{width: '100%'}}
                        value={resource_subtype}
                        disabled={resource_type.length ? false : true}
                        label='Resource Subtype'
                        onChange={(event) => this.setState({resource_subtype: event.target.value, resourceError: false, subResourceError: false})}
                        >
                            {resource_type.length ? resourceSubtypes[resource_type].map(type => (
                                <MenuItem value={type} key={type}>
                                    {type}
                                </MenuItem>
                            )) : null}
                    </TextField>


                    <TextField
                        select
                        
                        variant='outlined'
                        style={{width: '100%'}}
                        value={availability}
                        label='Availability'
                        disabled={resource_type === 'Blood' || resource_type === 'Food / Tiffin'}
                        onChange={(event) => this.setState({availability: event.target.value, subResourceError: false})}
                        >
                                <MenuItem value={false} key={'Available'}>
                                    {'Available'}
                                </MenuItem>

                                <MenuItem value={true} key={'Unavailable'}>
                                    {'Unavailable'}
                                </MenuItem>
                    </TextField>


                    <TextField style={{width: '100%'}} variant='outlined' label='Cost per Unit (in ₹)' type='number' value={cost_per_unit} onChange={(e) => this.setState({cost_per_unit: e.target.value})} />
                    <TextField style={{width: '100%'}} error={nameError} variant='outlined' required label='Contact Name' value={contact_name} onChange={(e) => this.setState({contact_name: e.target.value, nameError: false})} />
                    <TextField style={{width: '100%'}} error={numberError} variant='outlined' required label='Phone Number' type='phone' value={contact_number} onChange={(e) => this.setState({contact_number: e.target.value, numberError: false})} />
                    <TextField style={{width: '100%'}} variant='outlined' label='Lead Source' value={lead_source} onChange={(e) => this.setState({lead_source: e.target.value})} />


                    <Button onClick={() => this.checkDataAndSubmit()} style={{marginTop: theme.spacing(2), width: theme.spacing(20), display: 'flex', justifyContent: 'center', alignItems: 'center'}} variant='contained' color='primary'>
                        Submit
                    </Button>
                    
                </div>
            </div>
        )
    }
}

export default withTheme(withStyles(styles)(AddResources));