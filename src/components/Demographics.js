import {
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { genders } from '../helpers/GenderList';
import { countries } from '../helpers/CountryList';
import { educations } from '../helpers/EducationList';
import { ages } from '../helpers/AgeList';
import { professions } from '../helpers/ProfessionList';
import { investingDates } from '../helpers/InvestingDateList';
import { totalInvestments } from '../helpers/TotalInvestmentList';
import { ibts } from '../helpers/IBTList';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(4, 0, 0, 0),
    },
    width: '1200px',
    height: '700px',
    margin: '50px',
    backgroundColor: 'white',
    textAlign: 'center',
  },
  formControl: {
    width: 500,
  },
}));

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Demographics = () => {
  const classes = useStyles();
  const [details, setDetails] = useState({
    age: '',
    gender: [],
    citizenship: '',
    residence: '',
    education: '',
    profession: [],
    investingDate: '',
    totalInvestments: '',
    ibts: '',
  });
  const [hasError, setHasError] = useState(true);

  useEffect(() => {
    const checkAllEntered = () => {
      if (
        details.age === '' ||
        details.gender.length === 0 ||
        details.citizenship === '' ||
        details.residence === '' ||
        details.education === '' ||
        details.profession.length === 0 ||
        details.investingDate === '' ||
        details.totalInvestments === '' ||
        details.ibts === ''
      ) {
        setHasError(true);
      } else {
        setHasError(false);
      }
    };
    checkAllEntered();
  }, [details]);

  const handleChange = (event) => {
    const name = event.target.name;
    console.log(name);
    setDetails({
      ...details,
      [name]: event.target.value,
    });
  };

  const submitForm = () => {
    //TODO: Save to DB
    console.log(details);
  };

  return (
    <div className={classes.root}>
      <Typography
        variant='h4'
        gutterBottom
        style={{ backgroundColor: '#0065bd', color: 'white' }}
      >
        Enter your details
      </Typography>
      <Grid container spacing={12}>
        <Grid item xs>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor='age'>Age</InputLabel>
            <Select
              native
              value={details.age}
              onChange={handleChange}
              inputProps={{
                name: 'age',
                id: 'age',
              }}
            >
              <option aria-label='None' value='' />
              {ages.map((age) => (
                <option value={age}>{age}</option>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor='gender'>
              Current Gender Identity (check all that apply)
            </InputLabel>
            <Select
              labelId='gender'
              id='gender-id'
              multiple
              value={details.gender}
              onChange={handleChange}
              inputProps={{
                name: 'gender',
                id: 'gender',
              }}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {genders.map((gender) => (
                <MenuItem key={gender} value={gender}>
                  <Checkbox checked={details.gender.indexOf(gender) > -1} />
                  <ListItemText primary={gender} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor='citizenship'>
              What's your country/region of primary citizenship?
            </InputLabel>
            <Select
              native
              value={details.citizenship}
              onChange={handleChange}
              inputProps={{
                name: 'citizenship',
                id: 'citizenship',
              }}
            >
              <option aria-label='None' value='' />
              {countries.map((country) => (
                <option value={country}>{country}</option>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor='residence'>
              What is your country/region of residence?
            </InputLabel>
            <Select
              native
              value={details.residence}
              onChange={handleChange}
              inputProps={{
                name: 'residence',
                id: 'residence',
              }}
            >
              <option aria-label='None' value='' />
              {countries.map((country) => (
                <option value={country}>{country}</option>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor='education'>
              Highest level of education that you have completed
            </InputLabel>
            <Select
              native
              value={details.education}
              onChange={handleChange}
              inputProps={{
                name: 'education',
                id: 'education',
              }}
            >
              <option aria-label='None' value='' />
              {educations.map((education) => (
                <option value={education}>{education}</option>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor='profession'>
              Profession (check all that apply)
            </InputLabel>
            <Select
              labelId='profession'
              id='profession-id'
              multiple
              value={details.profession}
              onChange={handleChange}
              inputProps={{
                name: 'profession',
                id: 'profession',
              }}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {professions.map((profession) => (
                <MenuItem key={profession} value={profession}>
                  <Checkbox
                    checked={details.profession.indexOf(profession) > -1}
                  />
                  <ListItemText primary={profession} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor='investingDate'>
              When did you start investing?
            </InputLabel>
            <Select
              native
              value={details.investingDate}
              onChange={handleChange}
              inputProps={{
                name: 'investingDate',
                id: 'investingDate',
              }}
            >
              <option aria-label='None' value='' />
              {investingDates.map((investingDate) => (
                <option value={investingDate}>{investingDate}</option>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor='totalInvestments'>
              Total current investments?
            </InputLabel>
            <Select
              native
              value={details.totalInvestments}
              onChange={handleChange}
              inputProps={{
                name: 'totalInvestments',
                id: 'totalInvestments',
              }}
            >
              <option aria-label='None' value='' />
              {totalInvestments.map((totalInvestment) => (
                <option value={totalInvestment}>{totalInvestment}</option>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor='ibts'>
              Total Investor Bias Tests previously performed on our platform
            </InputLabel>
            <Select
              native
              value={details.ibts}
              onChange={handleChange}
              inputProps={{
                name: 'ibts',
                id: 'ibts',
              }}
            >
              <option aria-label='None' value='' />
              {ibts.map((ibt) => (
                <option value={ibt}>{ibt}</option>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      {hasError ? (
        <Typography variant='h6' gutterBottom style={{ color: 'red' }}>
          Enter all the fields*
        </Typography>
      ) : (
        <Button
          style={{ backgroundColor: '#0065bd', color: 'white' }}
          component={Link}
          to='/test'
          variant='contained'
          onClick={submitForm}
        >
          Next
        </Button>
      )}
    </div>
  );
};

export default Demographics;