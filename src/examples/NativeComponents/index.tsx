import {
  Column,
  QueryMixedChart,
  QueryPieChart,
  QueryTable,
  Row,
  Text,
  View,
  Input,
  Button,
} from '@latitude-data/react'
import { useEffect, useState } from 'react'

export default function NativeComponents() {
  const [startYear, setStartYear] = useState(2000)
  const [endYear, setEndYear] = useState(2024)

  const [startYearParam, setStartYearParam] = useState(startYear)
  const [endYearParam, setEndYearParam] = useState(endYear)

  function onChangeStartYear(e: React.ChangeEvent<HTMLInputElement>) {
    setStartYear(Number(e.target.value))
  }

  function onChangeEndYear(e: React.ChangeEvent<HTMLInputElement>) {
    setEndYear(Number(e.target.value))
  }

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (startYear !== startYearParam) {
        setStartYearParam(startYear)
      }
    }, 350)

    return () => {
      clearTimeout(debounceTimeout)
    }
  }, [startYearParam, startYear])

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (endYear !== endYearParam) {
        setEndYearParam(endYear)
      }
    }, 350)

    return () => {
      clearTimeout(debounceTimeout)
    }
  }, [endYearParam, endYear])

  return (
    <View className='gap-4 p-4 md:p-8'>
      <Row className='flex flex-col md:flex-row gap-8'>
        <Column className='md:basis-4/12 flex flex-col'>
          <Row>
            <Text.H1 className='font-bold'>
              <span className='lat-text-primary font-bold'>Netflix</span>{' '}
              Analysis
            </Text.H1>
          </Row>
          <Row>
            <Text.H4>
              This data app shows titles added to Netflix over the years.
            </Text.H4>
          </Row>
          <Row className='mt-4 md:mt-8 gap-4'>
            <Column>
              <Input
                type='number'
                value={startYear}
                onChange={onChangeStartYear}
              />
            </Column>
            <Column>
              <Input type='number' value={endYear} onChange={onChangeEndYear} />
            </Column>
          </Row>
          <Row>
            <Button className='mt-4 md:mt-8'>Run query</Button>
          </Row>
        </Column>
        <Column className='md:basis-4/12'>
          <QueryMixedChart
            download
            queryPath='titles/titles-year-type'
            params={{
              start_year: startYearParam,
              end_year: endYearParam,
            }}
            x='release_year'
            y={[
              { name: 'count_shows', chartType: 'line' },
              { name: 'count_movies', chartType: 'line' },
            ]}
            xTitle='Year'
            yTitle='Titles'
            title='Titles by year'
            description='Movies and shows added to Netflix over the years'
          />
        </Column>
        <Column className='md:basis-4/12'>
          <QueryPieChart
            download
            queryPath='titles/titles-type'
            params={{
              start_year: startYearParam,
              end_year: endYearParam,
            }}
            x='type'
            y='count'
            title='Titles by type'
            description='Total number of movies and shows added to Netflix'
            config={{
              showHole: true,
            }}
          />
        </Column>
      </Row>
      <Row className='flex flex-col md:flex-row gap-4'>
        <Column className='md:basis-6/12'>
          <Row>
            <QueryMixedChart
              download
              queryPath='titles/titles-top-countries'
              params={{
                start_year: startYearParam,
                end_year: endYearParam,
              }}
              x='main_country'
              y={[{ name: 'count', chartType: 'bar' }]}
              xTitle='Country'
              yTitle='Titles'
              title='Top countries'
              description='Countries with the most titles added to Netflix'
            />
          </Row>
        </Column>
        <Column className='md:basis-6/12'>
          <Row>
            <QueryMixedChart
              download
              queryPath='titles/titles-type-top-countries'
              params={{
                start_year: startYearParam,
                end_year: endYearParam,
              }}
              x='main_country'
              y={[
                { name: 'movie_rate', chartType: 'bar' },
                { name: 'show_rate', chartType: 'bar' },
              ]}
              xTitle='Country'
              yTitle='Titles'
              title='Top countries by type'
              description='Countries with the most movies and shows added to Netflix'
            />
          </Row>
        </Column>
      </Row>
      <Row>
        <QueryTable
          download
          queryPath='titles/titles-table'
          params={{
            start_year: startYearParam,
            end_year: endYearParam,
          }}
          className='w-full max-h-[500px]'
        />
      </Row>
    </View>
  )
}
