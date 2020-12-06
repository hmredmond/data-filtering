import React, { Fragment } from 'react';
import {
  connect,
  selectTeamOptions,
  setSelectedMatch,
  setSelectedTeam,
} from '../../store';
import { FootballPitch } from '../Shared';

const mapStateToProps = (state) => ({
  allTeamOptions: selectTeamOptions(state),
});

class Filter extends React.Component {
  render() {
    const { allTeamOptions } = this.props;
    return (
      <Fragment>
        <FootballPitch />
        <Fragment>
          {allTeamOptions.length !== 0 && (
            <div className="bg-gray-50 ">
              <div className="flex flex-row items-center">
                <div className="bg-gray-200 w-2/4">
                  <div className="px-4 flex flex-row justify-end items-center   h-screen">
                    <h2 className=" text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-right">
                      <span className="block">Ready to kick off?</span>
                      <span className="block text-red-600">
                        Choose a team....
                      </span>
                    </h2>
                  </div>
                </div>

                <div className="px-4 flex z-10 pl-12">
                  <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
                    <ul>
                      {allTeamOptions.map((team, index) => (
                        <li
                          key={`team-filter${index}`}
                          className="text-2xl text-gray-600 cursor-pointer p-1 font-bold transform hover:scale-150 hover:text-red-600"
                          onClick={(evt) => {
                            setSelectedTeam(team.value);
                            setSelectedMatch(undefined);
                          }}
                        >
                          {team.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Fragment>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(Filter);
