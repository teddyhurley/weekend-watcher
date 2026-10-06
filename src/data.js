/* Fictional demo data, not a live schedule. */
(function(root){ const data = {
  "isDemo": true,
  "label": "Fictional global showcase · October 9–11, 2026",
  "startDate": "2026-10-09",
  "endDate": "2026-10-11",
  "groups": {
    "Football": [
      "Premier League",
      "Championship",
      "La Liga",
      "Bundesliga",
      "Serie A",
      "Ligue 1",
      "MLS",
      "Liga MX",
      "Brasileirão",
      "UEFA Champions League",
      "WSL",
      "NWSL",
      "J1 League",
      "A-League Men",
      "UEFA Europa League",
      "UEFA Conference League",
      "Copa Libertadores",
      "International football · men",
      "International football · women",
      "Scottish Premiership",
      "Primeira Liga",
      "Eredivisie",
      "Argentine Primera División",
      "K League 1",
      "Saudi Pro League",
      "A-League Women",
      "WE League",
      "WK League",
      "Liga F",
      "Frauen-Bundesliga",
      "UEFA Women’s Champions League",
      "Copa Libertadores Femenina",
      "Copa Sudamericana",
      "AFC Champions League Elite",
      "CONCACAF Champions Cup"
    ],
    "Cricket": [
      "IPL",
      "International cricket · men",
      "BBL",
      "PSL",
      "SA20",
      "The Hundred · men",
      "The Hundred · women",
      "Caribbean Premier League",
      "Women’s Caribbean Premier League",
      "Major League Cricket",
      "Bangladesh Premier League",
      "ILT20"
    ],
    "Australian rules": [
      "AFL",
      "AFLW"
    ],
    "American football": [
      "NFL"
    ],
    "Basketball": [
      "NBA",
      "WNBA",
      "EuroLeague",
      "NBL",
      "WNBL",
      "B.PREMIER",
      "W League · Japan",
      "KBL",
      "WKBL",
      "NBB",
      "LBF",
      "FIBA internationals · men",
      "FIBA internationals · women",
      "EuroLeague Women"
    ],
    "Rugby": [
      "International rugby",
      "Top 14",
      "URC",
      "NRL",
      "NRLW",
      "Super League",
      "Women’s Super League · rugby league",
      "Premiership Rugby",
      "Premiership Women’s Rugby",
      "Super Rugby Pacific",
      "Japan Rugby League One · Division 1",
      "International rugby · women"
    ],
    "Baseball": [
      "MLB",
      "NPB",
      "KBO",
      "World Baseball Classic"
    ],
    "Ice hockey": [
      "NHL",
      "PWHL",
      "IIHF internationals · men",
      "IIHF internationals · women"
    ],
    "Motorsport": [
      "Formula 1",
      "MotoGP",
      "IndyCar",
      "NASCAR Cup Series",
      "Supercars",
      "Formula E",
      "World Rally Championship",
      "World Endurance Championship"
    ],
    "Tennis": [
      "ATP",
      "WTA"
    ],
    "Volleyball": [
      "SV.League · men",
      "SV.League · women",
      "V-League · men",
      "V-League · women",
      "Superliga · men",
      "Superliga · women",
      "Volleyball internationals · men",
      "Volleyball internationals · women"
    ],
    "Netball": [
      "Super Netball",
      "Netball Super League",
      "International netball"
    ],
    "Golf": [
      "PGA Tour",
      "DP World Tour",
      "LPGA Tour",
      "Ladies European Tour",
      "JLPGA Tour",
      "Japan Golf Tour",
      "KPGA Tour",
      "KLPGA Tour"
    ],
    "MMA": [
      "UFC",
      "ONE Championship",
      "PFL"
    ],
    "Boxing": [
      "Major boxing cards"
    ],
    "Darts": [
      "PDC premier events"
    ],
    "Surfing": [
      "World Surf League · men",
      "World Surf League · women"
    ],
    "Futsal": [
      "Liga Nacional de Futsal",
      "International futsal · men",
      "International futsal · women"
    ],
    "Sumo": [
      "Grand Sumo · Makuuchi"
    ],
    "Table tennis": [
      "WTT premier events"
    ],
    "Badminton": [
      "BWF World Tour"
    ],
    "Athletics": [
      "Diamond League",
      "World Athletics Championships"
    ],
    "Cycling": [
      "UCI WorldTour · men",
      "UCI Women’s WorldTour"
    ],
    "Sailing": [
      "SailGP"
    ],
    "Skateboarding": [
      "Street League Skateboarding"
    ],
    "Lacrosse": [
      "PLL",
      "NLL",
      "WLL"
    ],
    "Winter sports": [
      "ISU figure skating",
      "International curling"
    ],
    "Aquatics": [
      "World Aquatics Championships"
    ],
    "Gymnastics": [
      "World Gymnastics Championships"
    ],
    "Judo": [
      "IJF World Tour"
    ],
    "Wrestling": [
      "UWW senior championships"
    ],
    "Horse racing": [
      "Major Group / Grade 1 racing"
    ],
    "Multi-sport": [
      "Olympic Games",
      "Paralympic Games",
      "Asian Games"
    ],
    "Esports": [
      "League of Legends · premier competitions",
      "Counter-Strike 2 · premier events",
      "VALORANT · premier competitions",
      "Dota 2 · premier events"
    ]
  },
  "games": [
    {
      "id": "demo-01",
      "league": "MLB",
      "away": {
        "id": "Baseball:san-diego-padres",
        "name": "San Diego Padres",
        "abbr": "SD",
        "strength": 88,
        "country": "US"
      },
      "home": {
        "id": "Baseball:los-angeles-dodgers",
        "name": "Los Angeles Dodgers",
        "abbr": "LAD",
        "strength": 94,
        "country": "US"
      },
      "start": "2026-10-09T23:10:00Z",
      "duration": 180,
      "stage": "postseason",
      "rivalry": true,
      "headline": "October. no easy outs",
      "status": "scheduled",
      "isDemo": true,
      "source": "Invented sample data",
      "sport": "Baseball",
      "format": "Match",
      "venueZone": "America/New_York",
      "participants": [
        {
          "id": "Baseball:san-diego-padres",
          "name": "San Diego Padres",
          "abbr": "SD",
          "strength": 88,
          "country": "US"
        },
        {
          "id": "Baseball:los-angeles-dodgers",
          "name": "Los Angeles Dodgers",
          "abbr": "LAD",
          "strength": 94,
          "country": "US"
        }
      ],
      "beginner": "The recommendation uses fictional ratings and stage labels; it does not predict the winner.",
      "competition": {
        "sport": "Baseball",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "US",
          "CA"
        ],
        "code": "MLB",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "espn",
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "US",
        "CA"
      ],
      "keyPeople": {
        "label": "Probable pitchers",
        "isDemo": true,
        "source": "Invented names and assignments for this demo",
        "asOf": null,
        "players": [
          {
            "teamId": "Baseball:san-diego-padres",
            "name": "Alex Mercer",
            "role": "RHP",
            "status": "probable",
            "quality": 92,
            "statLine": "2.84 ERA · 1.03 WHIP"
          },
          {
            "teamId": "Baseball:los-angeles-dodgers",
            "name": "Luis Vega",
            "role": "LHP",
            "status": "probable",
            "quality": 92,
            "statLine": "3.16 ERA · 1.09 WHIP"
          }
        ]
      },
      "promo": {
        "heading": "October. No easy outs.",
        "body": "San Diego meets Los Angeles in a sample postseason rivalry. Two strong pitching matchups make this one worth settling in for."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        },
        {
          "id": "playoffs",
          "detail": "Part of the sample postseason.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-02",
      "league": "MLB",
      "away": {
        "id": "Baseball:baltimore-orioles",
        "name": "Baltimore Orioles",
        "abbr": "BAL",
        "strength": 86,
        "country": "US"
      },
      "home": {
        "id": "Baseball:new-york-yankees",
        "name": "New York Yankees",
        "abbr": "NYY",
        "strength": 91,
        "country": "US"
      },
      "start": "2026-10-10T00:10:00Z",
      "duration": 180,
      "stage": "postseason",
      "rivalry": false,
      "headline": "October. no easy outs",
      "status": "scheduled",
      "isDemo": true,
      "source": "Invented sample data",
      "sport": "Baseball",
      "format": "Match",
      "venueZone": "America/New_York",
      "participants": [
        {
          "id": "Baseball:baltimore-orioles",
          "name": "Baltimore Orioles",
          "abbr": "BAL",
          "strength": 86,
          "country": "US"
        },
        {
          "id": "Baseball:new-york-yankees",
          "name": "New York Yankees",
          "abbr": "NYY",
          "strength": 91,
          "country": "US"
        }
      ],
      "beginner": "The recommendation uses fictional ratings and stage labels; it does not predict the winner.",
      "competition": {
        "sport": "Baseball",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "US",
          "CA"
        ],
        "code": "MLB",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "espn",
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "US",
        "CA"
      ],
      "keyPeople": {
        "label": "Probable pitchers",
        "isDemo": true,
        "source": "Invented names and assignments for this demo",
        "asOf": null,
        "players": [
          {
            "teamId": "Baseball:baltimore-orioles",
            "name": "Alex Mercer",
            "role": "RHP",
            "status": "probable",
            "quality": 81,
            "statLine": "2.84 ERA · 1.03 WHIP"
          },
          {
            "teamId": "Baseball:new-york-yankees",
            "name": "Luis Vega",
            "role": "LHP",
            "status": "probable",
            "quality": 86,
            "statLine": "3.16 ERA · 1.09 WHIP"
          }
        ]
      },
      "promo": {
        "heading": "The postseason starts here.",
        "body": "Two sides with different strengths. Watch who sets the tempo."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "playoffs",
          "detail": "Part of the sample postseason.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-03",
      "league": "WNBA",
      "away": {
        "id": "Basketball:las-vegas-aces",
        "name": "Las Vegas Aces",
        "abbr": "LVA",
        "strength": 92,
        "country": "US"
      },
      "home": {
        "id": "Basketball:new-york-liberty",
        "name": "New York Liberty",
        "abbr": "NYL",
        "strength": 94,
        "country": "US"
      },
      "start": "2026-10-09T23:00:00Z",
      "duration": 135,
      "stage": "postseason",
      "rivalry": false,
      "headline": "Here is your next good game",
      "status": "scheduled",
      "isDemo": true,
      "source": "Invented sample data",
      "sport": "Basketball",
      "format": "Match",
      "venueZone": "America/New_York",
      "participants": [
        {
          "id": "Basketball:las-vegas-aces",
          "name": "Las Vegas Aces",
          "abbr": "LVA",
          "strength": 92,
          "country": "US"
        },
        {
          "id": "Basketball:new-york-liberty",
          "name": "New York Liberty",
          "abbr": "NYL",
          "strength": 94,
          "country": "US"
        }
      ],
      "beginner": "The recommendation uses fictional ratings and stage labels; it does not predict the winner.",
      "competition": {
        "sport": "Basketball",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "US",
          "CA"
        ],
        "code": "WNBA",
        "coverage": "demo_only",
        "category": "women",
        "nature": "competitive",
        "sourceRefs": [
          "espn",
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "women"
        ]
      },
      "countries": [
        "US",
        "CA"
      ],
      "keyPeople": {
        "label": "Top scorers",
        "type": "scoring_leaders",
        "metric": "points_per_game",
        "statsPeriod": "Fictional season averages",
        "isDemo": true,
        "source": "Invented demo names and season statistics; not actual roster information",
        "asOf": null,
        "players": [
          {
            "teamId": "Basketball:las-vegas-aces",
            "name": "Maya Bennett",
            "role": "Guard / forward",
            "status": "unverified",
            "availability": "Not verified",
            "stats": {
              "ppg": 23.6,
              "rpg": 4.7,
              "apg": 5.2
            },
            "statLine": "23.6 PPG · 4.7 RPG · 5.2 APG"
          },
          {
            "teamId": "Basketball:new-york-liberty",
            "name": "Jordan Blake",
            "role": "Guard / forward",
            "status": "unverified",
            "availability": "Not verified",
            "stats": {
              "ppg": 24.3,
              "rpg": 5.1,
              "apg": 5.5
            },
            "statLine": "24.3 PPG · 5.1 RPG · 5.5 APG"
          }
        ],
        "note": "One sample leading scorer per team. Playing status not verified."
      },
      "promo": {
        "heading": "The postseason starts here.",
        "body": "Two sides with different strengths. Watch who sets the tempo."
      },
      "watchOptions": [],
      "category": "women",
      "tagEvidence": [
        {
          "id": "playoffs",
          "detail": "Part of the sample postseason.",
          "isDemo": true
        },
        {
          "id": "star-players",
          "detail": "Fictional marquee player designation. Availability is not verified.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-04",
      "league": "NHL",
      "away": {
        "id": "Ice hockey:new-jersey-devils",
        "name": "New Jersey Devils",
        "abbr": "NJD",
        "strength": 86,
        "country": "US"
      },
      "home": {
        "id": "Ice hockey:new-york-rangers",
        "name": "New York Rangers",
        "abbr": "NYR",
        "strength": 87,
        "country": "US"
      },
      "start": "2026-10-09T23:30:00Z",
      "duration": 165,
      "stage": "regular",
      "rivalry": true,
      "headline": "This one is personal",
      "status": "scheduled",
      "isDemo": true,
      "source": "Invented sample data",
      "sport": "Ice hockey",
      "format": "Match",
      "venueZone": "America/New_York",
      "participants": [
        {
          "id": "Ice hockey:new-jersey-devils",
          "name": "New Jersey Devils",
          "abbr": "NJD",
          "strength": 86,
          "country": "US"
        },
        {
          "id": "Ice hockey:new-york-rangers",
          "name": "New York Rangers",
          "abbr": "NYR",
          "strength": 87,
          "country": "US"
        }
      ],
      "beginner": "The recommendation uses fictional ratings and stage labels; it does not predict the winner.",
      "competition": {
        "sport": "Ice hockey",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "US",
          "CA"
        ],
        "code": "NHL",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "espn",
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "US",
        "CA"
      ],
      "keyPeople": {
        "label": "Top scorers",
        "type": "scoring_leaders",
        "metric": "points",
        "statsPeriod": "Fictional season totals",
        "isDemo": true,
        "source": "Invented demo names and season statistics; not actual roster information",
        "asOf": null,
        "players": [
          {
            "teamId": "Ice hockey:new-jersey-devils",
            "name": "Avery Knox",
            "role": "Forward",
            "status": "unverified",
            "availability": "Not verified",
            "stats": {
              "goals": 31,
              "assists": 45,
              "points": 76
            },
            "statLine": "76 PTS · 31 G · 45 A"
          },
          {
            "teamId": "Ice hockey:new-york-rangers",
            "name": "Mason Vale",
            "role": "Forward",
            "status": "unverified",
            "availability": "Not verified",
            "stats": {
              "goals": 34,
              "assists": 47,
              "points": 81
            },
            "statLine": "81 PTS · 34 G · 47 A"
          }
        ],
        "note": "One sample leading scorer per team. Playing status not verified."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "A familiar opponent, with a new chapter to write."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-05",
      "league": "NBA",
      "away": {
        "id": "Basketball:los-angeles-lakers",
        "name": "Los Angeles Lakers",
        "abbr": "LAL",
        "strength": 83,
        "country": "US"
      },
      "home": {
        "id": "Basketball:golden-state-warriors",
        "name": "Golden State Warriors",
        "abbr": "GSW",
        "strength": 82,
        "country": "US"
      },
      "start": "2026-10-10T02:00:00Z",
      "duration": 150,
      "stage": "preseason",
      "rivalry": true,
      "headline": "This one is personal",
      "status": "scheduled",
      "isDemo": true,
      "source": "Invented sample data",
      "sport": "Basketball",
      "format": "Match",
      "venueZone": "America/New_York",
      "participants": [
        {
          "id": "Basketball:los-angeles-lakers",
          "name": "Los Angeles Lakers",
          "abbr": "LAL",
          "strength": 83,
          "country": "US"
        },
        {
          "id": "Basketball:golden-state-warriors",
          "name": "Golden State Warriors",
          "abbr": "GSW",
          "strength": 82,
          "country": "US"
        }
      ],
      "beginner": "The recommendation uses fictional ratings and stage labels; it does not predict the winner.",
      "competition": {
        "sport": "Basketball",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "US",
          "CA"
        ],
        "code": "NBA",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "espn",
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "US",
        "CA"
      ],
      "keyPeople": {
        "label": "Top scorers",
        "type": "scoring_leaders",
        "metric": "points_per_game",
        "statsPeriod": "Fictional season averages",
        "isDemo": true,
        "source": "Invented demo names and season statistics; not actual roster information",
        "asOf": null,
        "players": [
          {
            "teamId": "Basketball:los-angeles-lakers",
            "name": "Darius Hayes",
            "role": "Guard / forward",
            "status": "unverified",
            "availability": "Not verified",
            "stats": {
              "ppg": 27.4,
              "rpg": 4.7,
              "apg": 5.2
            },
            "statLine": "27.4 PPG · 4.7 RPG · 5.2 APG"
          },
          {
            "teamId": "Basketball:golden-state-warriors",
            "name": "Micah Brooks",
            "role": "Guard / forward",
            "status": "unverified",
            "availability": "Not verified",
            "stats": {
              "ppg": 28.1,
              "rpg": 5.1,
              "apg": 5.5
            },
            "statLine": "28.1 PPG · 5.1 RPG · 5.5 APG"
          }
        ],
        "note": "One sample leading scorer per team. Playing status not verified."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "A familiar opponent, with a new chapter to write."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-06",
      "league": "NHL",
      "away": {
        "id": "Ice hockey:los-angeles-kings",
        "name": "Los Angeles Kings",
        "abbr": "LAK",
        "strength": 80,
        "country": "US"
      },
      "home": {
        "id": "Ice hockey:san-jose-sharks",
        "name": "San Jose Sharks",
        "abbr": "SJS",
        "strength": 62,
        "country": "US"
      },
      "start": "2026-10-10T02:30:00Z",
      "duration": 165,
      "stage": "regular",
      "rivalry": true,
      "headline": "This one is personal",
      "status": "scheduled",
      "isDemo": true,
      "source": "Invented sample data",
      "sport": "Ice hockey",
      "format": "Match",
      "venueZone": "America/New_York",
      "participants": [
        {
          "id": "Ice hockey:los-angeles-kings",
          "name": "Los Angeles Kings",
          "abbr": "LAK",
          "strength": 80,
          "country": "US"
        },
        {
          "id": "Ice hockey:san-jose-sharks",
          "name": "San Jose Sharks",
          "abbr": "SJS",
          "strength": 62,
          "country": "US"
        }
      ],
      "beginner": "The recommendation uses fictional ratings and stage labels; it does not predict the winner.",
      "competition": {
        "sport": "Ice hockey",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "US",
          "CA"
        ],
        "code": "NHL",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "espn",
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "US",
        "CA"
      ],
      "keyPeople": {
        "label": "Top scorers",
        "type": "scoring_leaders",
        "metric": "points",
        "statsPeriod": "Fictional season totals",
        "isDemo": true,
        "source": "Invented demo names and season statistics; not actual roster information",
        "asOf": null,
        "players": [
          {
            "teamId": "Ice hockey:los-angeles-kings",
            "name": "Elliot Frost",
            "role": "Forward",
            "status": "unverified",
            "availability": "Not verified",
            "stats": {
              "goals": 37,
              "assists": 49,
              "points": 86
            },
            "statLine": "86 PTS · 37 G · 49 A"
          },
          {
            "teamId": "Ice hockey:san-jose-sharks",
            "name": "Luca Hale",
            "role": "Forward",
            "status": "unverified",
            "availability": "Not verified",
            "stats": {
              "goals": 40,
              "assists": 51,
              "points": 91
            },
            "statLine": "91 PTS · 40 G · 51 A"
          }
        ],
        "note": "One sample leading scorer per team. Playing status not verified."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "A familiar opponent, with a new chapter to write."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-07",
      "league": "Premier League",
      "away": {
        "id": "Football:liverpool",
        "name": "Liverpool",
        "abbr": "LIV",
        "strength": 91,
        "country": "GB"
      },
      "home": {
        "id": "Football:arsenal",
        "name": "Arsenal",
        "abbr": "ARS",
        "strength": 92,
        "country": "GB"
      },
      "start": "2026-10-10T11:30:00Z",
      "duration": 120,
      "stage": "marquee",
      "rivalry": false,
      "headline": "Here is your next good game",
      "status": "scheduled",
      "isDemo": true,
      "source": "Invented sample data",
      "sport": "Football",
      "format": "Match",
      "venueZone": "Europe/London",
      "participants": [
        {
          "id": "Football:liverpool",
          "name": "Liverpool",
          "abbr": "LIV",
          "strength": 91,
          "country": "GB"
        },
        {
          "id": "Football:arsenal",
          "name": "Arsenal",
          "abbr": "ARS",
          "strength": 92,
          "country": "GB"
        }
      ],
      "beginner": "The recommendation uses fictional ratings and stage labels; it does not predict the winner.",
      "competition": {
        "sport": "Football",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "GB"
        ],
        "code": "PL",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": true,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "GB"
      ],
      "keyPeople": {
        "label": "Team news",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Lineups and key absences not connected."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "Two sides with different strengths. Watch who sets the tempo."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "title-race",
          "detail": "Fictional league title-race context.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-08",
      "league": "Premier League",
      "away": {
        "id": "Football:leeds-united",
        "name": "Leeds United",
        "abbr": "LEE",
        "strength": 65,
        "country": "GB"
      },
      "home": {
        "id": "Football:newcastle-united",
        "name": "Newcastle United",
        "abbr": "NEW",
        "strength": 78,
        "country": "GB"
      },
      "start": "2026-10-10T14:00:00Z",
      "duration": 120,
      "stage": "regular",
      "rivalry": false,
      "headline": "Here is your next good game",
      "status": "scheduled",
      "isDemo": true,
      "source": "Invented sample data",
      "sport": "Football",
      "format": "Match",
      "venueZone": "Europe/London",
      "participants": [
        {
          "id": "Football:leeds-united",
          "name": "Leeds United",
          "abbr": "LEE",
          "strength": 65,
          "country": "GB"
        },
        {
          "id": "Football:newcastle-united",
          "name": "Newcastle United",
          "abbr": "NEW",
          "strength": 78,
          "country": "GB"
        }
      ],
      "beginner": "The recommendation uses fictional ratings and stage labels; it does not predict the winner.",
      "competition": {
        "sport": "Football",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "GB"
        ],
        "code": "PL",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": true,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "GB"
      ],
      "keyPeople": {
        "label": "Team news",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Lineups and key absences not connected."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "Two sides with different strengths. Watch who sets the tempo."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "playoff-race",
          "detail": "Fictional qualification-race context.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-09",
      "league": "Premier League",
      "away": {
        "id": "Football:manchester-city",
        "name": "Manchester City",
        "abbr": "MCI",
        "strength": 93,
        "country": "GB"
      },
      "home": {
        "id": "Football:everton",
        "name": "Everton",
        "abbr": "EVE",
        "strength": 61,
        "country": "GB"
      },
      "start": "2026-10-10T16:30:00Z",
      "duration": 120,
      "stage": "regular",
      "rivalry": false,
      "headline": "Here is your next good game",
      "status": "scheduled",
      "isDemo": true,
      "source": "Invented sample data",
      "sport": "Football",
      "format": "Match",
      "venueZone": "Europe/London",
      "participants": [
        {
          "id": "Football:manchester-city",
          "name": "Manchester City",
          "abbr": "MCI",
          "strength": 93,
          "country": "GB"
        },
        {
          "id": "Football:everton",
          "name": "Everton",
          "abbr": "EVE",
          "strength": 61,
          "country": "GB"
        }
      ],
      "beginner": "The recommendation uses fictional ratings and stage labels; it does not predict the winner.",
      "competition": {
        "sport": "Football",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "GB"
        ],
        "code": "PL",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": true,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "GB"
      ],
      "keyPeople": {
        "label": "Team news",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Lineups and key absences not connected."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "Two sides with different strengths. Watch who sets the tempo."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "former-coach",
          "detail": "A fictional former team connection for this showcase.",
          "isDemo": true,
          "person": "Jordan Ellis (invented)",
          "formerTeamId": "Football:manchester-city",
          "currentTeamId": "Football:everton"
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-14",
      "league": "MLB",
      "away": {
        "id": "Baseball:new-york-mets",
        "name": "New York Mets",
        "abbr": "NYM",
        "strength": 86,
        "country": "US"
      },
      "home": {
        "id": "Baseball:philadelphia-phillies",
        "name": "Philadelphia Phillies",
        "abbr": "PHI",
        "strength": 91,
        "country": "US"
      },
      "start": "2026-10-10T21:10:00Z",
      "duration": 180,
      "stage": "postseason",
      "rivalry": true,
      "headline": "October. no easy outs",
      "status": "scheduled",
      "isDemo": true,
      "source": "Invented sample data",
      "sport": "Baseball",
      "format": "Match",
      "venueZone": "America/New_York",
      "participants": [
        {
          "id": "Baseball:new-york-mets",
          "name": "New York Mets",
          "abbr": "NYM",
          "strength": 86,
          "country": "US"
        },
        {
          "id": "Baseball:philadelphia-phillies",
          "name": "Philadelphia Phillies",
          "abbr": "PHI",
          "strength": 91,
          "country": "US"
        }
      ],
      "beginner": "The recommendation uses fictional ratings and stage labels; it does not predict the winner.",
      "competition": {
        "sport": "Baseball",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "US",
          "CA"
        ],
        "code": "MLB",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "espn",
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "US",
        "CA"
      ],
      "keyPeople": {
        "label": "Probable pitchers",
        "isDemo": true,
        "source": "Invented names and assignments for this demo",
        "asOf": null,
        "players": [
          {
            "teamId": "Baseball:new-york-mets",
            "name": "Alex Mercer",
            "role": "RHP",
            "status": "probable",
            "quality": 81,
            "statLine": "2.84 ERA · 1.03 WHIP"
          },
          {
            "teamId": "Baseball:philadelphia-phillies",
            "name": "Luis Vega",
            "role": "LHP",
            "status": "probable",
            "quality": 86,
            "statLine": "3.16 ERA · 1.09 WHIP"
          }
        ]
      },
      "promo": {
        "heading": "The postseason starts here.",
        "body": "A familiar opponent, with a new chapter to write."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        },
        {
          "id": "playoffs",
          "detail": "Part of the sample postseason.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-15",
      "league": "MLB",
      "away": {
        "id": "Baseball:san-diego-padres",
        "name": "San Diego Padres",
        "abbr": "SD",
        "strength": 88,
        "country": "US"
      },
      "home": {
        "id": "Baseball:los-angeles-dodgers",
        "name": "Los Angeles Dodgers",
        "abbr": "LAD",
        "strength": 94,
        "country": "US"
      },
      "start": "2026-10-11T00:10:00Z",
      "duration": 180,
      "stage": "postseason",
      "rivalry": true,
      "headline": "October. no easy outs",
      "status": "scheduled",
      "isDemo": true,
      "source": "Invented sample data",
      "sport": "Baseball",
      "format": "Match",
      "venueZone": "America/New_York",
      "participants": [
        {
          "id": "Baseball:san-diego-padres",
          "name": "San Diego Padres",
          "abbr": "SD",
          "strength": 88,
          "country": "US"
        },
        {
          "id": "Baseball:los-angeles-dodgers",
          "name": "Los Angeles Dodgers",
          "abbr": "LAD",
          "strength": 94,
          "country": "US"
        }
      ],
      "beginner": "The recommendation uses fictional ratings and stage labels; it does not predict the winner.",
      "competition": {
        "sport": "Baseball",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "US",
          "CA"
        ],
        "code": "MLB",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "espn",
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "US",
        "CA"
      ],
      "keyPeople": {
        "label": "Probable pitchers",
        "isDemo": true,
        "source": "Invented names and assignments for this demo",
        "asOf": null,
        "players": [
          {
            "teamId": "Baseball:san-diego-padres",
            "name": "Alex Mercer",
            "role": "RHP",
            "status": "probable",
            "quality": 81,
            "statLine": "2.84 ERA · 1.03 WHIP"
          },
          {
            "teamId": "Baseball:los-angeles-dodgers",
            "name": "Luis Vega",
            "role": "LHP",
            "status": "probable",
            "quality": 86,
            "statLine": "3.16 ERA · 1.09 WHIP"
          }
        ]
      },
      "promo": {
        "heading": "The postseason starts here.",
        "body": "A familiar opponent, with a new chapter to write."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        },
        {
          "id": "playoffs",
          "detail": "Part of the sample postseason.",
          "isDemo": true
        },
        {
          "id": "rematch",
          "detail": "The same two sides meet again in the sample series.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-16",
      "league": "NHL",
      "away": {
        "id": "Ice hockey:vancouver-canucks",
        "name": "Vancouver Canucks",
        "abbr": "VAN",
        "strength": 86,
        "country": "US"
      },
      "home": {
        "id": "Ice hockey:edmonton-oilers",
        "name": "Edmonton Oilers",
        "abbr": "EDM",
        "strength": 93,
        "country": "US"
      },
      "start": "2026-10-10T23:00:00Z",
      "duration": 165,
      "stage": "regular",
      "rivalry": true,
      "headline": "This one is personal",
      "status": "scheduled",
      "isDemo": true,
      "source": "Invented sample data",
      "sport": "Ice hockey",
      "format": "Match",
      "venueZone": "America/New_York",
      "participants": [
        {
          "id": "Ice hockey:vancouver-canucks",
          "name": "Vancouver Canucks",
          "abbr": "VAN",
          "strength": 86,
          "country": "US"
        },
        {
          "id": "Ice hockey:edmonton-oilers",
          "name": "Edmonton Oilers",
          "abbr": "EDM",
          "strength": 93,
          "country": "US"
        }
      ],
      "beginner": "The recommendation uses fictional ratings and stage labels; it does not predict the winner.",
      "competition": {
        "sport": "Ice hockey",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "US",
          "CA"
        ],
        "code": "NHL",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "espn",
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "US",
        "CA"
      ],
      "keyPeople": {
        "label": "Top scorers",
        "type": "scoring_leaders",
        "metric": "points",
        "statsPeriod": "Fictional season totals",
        "isDemo": true,
        "source": "Invented demo names and season statistics; not actual roster information",
        "asOf": null,
        "players": [
          {
            "teamId": "Ice hockey:vancouver-canucks",
            "name": "Callum Voss",
            "role": "Forward",
            "status": "unverified",
            "availability": "Not verified",
            "stats": {
              "goals": 43,
              "assists": 53,
              "points": 96
            },
            "statLine": "96 PTS · 43 G · 53 A"
          },
          {
            "teamId": "Ice hockey:edmonton-oilers",
            "name": "Nolan Pierce",
            "role": "Forward",
            "status": "unverified",
            "availability": "Not verified",
            "stats": {
              "goals": 46,
              "assists": 55,
              "points": 101
            },
            "statLine": "101 PTS · 46 G · 55 A"
          }
        ],
        "note": "One sample leading scorer per team. Playing status not verified."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "A familiar opponent, with a new chapter to write."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-17",
      "league": "MLS",
      "away": {
        "id": "Football:orlando-city-sc",
        "name": "Orlando City SC",
        "abbr": "ORL",
        "strength": 79,
        "country": "US"
      },
      "home": {
        "id": "Football:inter-miami-cf",
        "name": "Inter Miami CF",
        "abbr": "MIA",
        "strength": 91,
        "country": "US"
      },
      "start": "2026-10-10T23:00:00Z",
      "duration": 120,
      "stage": "regular",
      "rivalry": true,
      "headline": "This one is personal",
      "status": "scheduled",
      "isDemo": true,
      "source": "Invented sample data",
      "sport": "Football",
      "format": "Match",
      "venueZone": "America/New_York",
      "participants": [
        {
          "id": "Football:orlando-city-sc",
          "name": "Orlando City SC",
          "abbr": "ORL",
          "strength": 79,
          "country": "US"
        },
        {
          "id": "Football:inter-miami-cf",
          "name": "Inter Miami CF",
          "abbr": "MIA",
          "strength": 91,
          "country": "US"
        }
      ],
      "beginner": "The recommendation uses fictional ratings and stage labels; it does not predict the winner.",
      "competition": {
        "sport": "Football",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "US",
          "CA"
        ],
        "code": "MLS",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "US",
        "CA"
      ],
      "keyPeople": {
        "label": "Team news",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Lineups and key absences not connected."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "A familiar opponent, with a new chapter to write."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-18",
      "league": "MLS",
      "away": {
        "id": "Football:los-angeles-fc",
        "name": "Los Angeles FC",
        "abbr": "LAFC",
        "strength": 88,
        "country": "US"
      },
      "home": {
        "id": "Football:la-galaxy",
        "name": "LA Galaxy",
        "abbr": "LAG",
        "strength": 81,
        "country": "US"
      },
      "start": "2026-10-11T02:30:00Z",
      "duration": 120,
      "stage": "regular",
      "rivalry": true,
      "headline": "This one is personal",
      "status": "scheduled",
      "isDemo": true,
      "source": "Invented sample data",
      "sport": "Football",
      "format": "Match",
      "venueZone": "America/New_York",
      "participants": [
        {
          "id": "Football:los-angeles-fc",
          "name": "Los Angeles FC",
          "abbr": "LAFC",
          "strength": 88,
          "country": "US"
        },
        {
          "id": "Football:la-galaxy",
          "name": "LA Galaxy",
          "abbr": "LAG",
          "strength": 81,
          "country": "US"
        }
      ],
      "beginner": "The recommendation uses fictional ratings and stage labels; it does not predict the winner.",
      "competition": {
        "sport": "Football",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "US",
          "CA"
        ],
        "code": "MLS",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "US",
        "CA"
      ],
      "keyPeople": {
        "label": "Team news",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Lineups and key absences not connected."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "A familiar opponent, with a new chapter to write."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        },
        {
          "id": "former-player",
          "detail": "A fictional former team connection for this showcase.",
          "isDemo": true,
          "person": "Jordan Ellis (invented)",
          "formerTeamId": "Football:los-angeles-fc",
          "currentTeamId": "Football:la-galaxy"
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-19",
      "league": "NBA",
      "away": {
        "id": "Basketball:new-york-knicks",
        "name": "New York Knicks",
        "abbr": "NYK",
        "strength": 87,
        "country": "US"
      },
      "home": {
        "id": "Basketball:boston-celtics",
        "name": "Boston Celtics",
        "abbr": "BOS",
        "strength": 94,
        "country": "US"
      },
      "start": "2026-10-11T01:00:00Z",
      "duration": 150,
      "stage": "regular",
      "rivalry": true,
      "headline": "This one is personal",
      "status": "scheduled",
      "isDemo": true,
      "source": "Invented sample data",
      "sport": "Basketball",
      "format": "Match",
      "venueZone": "America/New_York",
      "participants": [
        {
          "id": "Basketball:new-york-knicks",
          "name": "New York Knicks",
          "abbr": "NYK",
          "strength": 87,
          "country": "US"
        },
        {
          "id": "Basketball:boston-celtics",
          "name": "Boston Celtics",
          "abbr": "BOS",
          "strength": 94,
          "country": "US"
        }
      ],
      "beginner": "The recommendation uses fictional ratings and stage labels; it does not predict the winner.",
      "competition": {
        "sport": "Basketball",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "US",
          "CA"
        ],
        "code": "NBA",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "espn",
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "US",
        "CA"
      ],
      "keyPeople": {
        "label": "Top scorers",
        "type": "scoring_leaders",
        "metric": "points_per_game",
        "statsPeriod": "Fictional season averages",
        "isDemo": true,
        "source": "Invented demo names and season statistics; not actual roster information",
        "asOf": null,
        "players": [
          {
            "teamId": "Basketball:new-york-knicks",
            "name": "Julian Reed",
            "role": "Guard / forward",
            "status": "unverified",
            "availability": "Not verified",
            "stats": {
              "ppg": 28.8,
              "rpg": 5.5,
              "apg": 5.8
            },
            "statLine": "28.8 PPG · 5.5 RPG · 5.8 APG"
          },
          {
            "teamId": "Basketball:boston-celtics",
            "name": "Kellan Price",
            "role": "Guard / forward",
            "status": "unverified",
            "availability": "Not verified",
            "stats": {
              "ppg": 29.5,
              "rpg": 5.9,
              "apg": 6.1
            },
            "statLine": "29.5 PPG · 5.9 RPG · 6.1 APG"
          }
        ],
        "note": "One sample leading scorer per team. Playing status not verified."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "A familiar opponent, with a new chapter to write."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        },
        {
          "id": "star-players",
          "detail": "Fictional marquee player designation. Availability is not verified.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-20",
      "league": "Premier League",
      "away": {
        "id": "Football:brighton-hove-albion",
        "name": "Brighton & Hove Albion",
        "abbr": "BHA",
        "strength": 75,
        "country": "GB"
      },
      "home": {
        "id": "Football:aston-villa",
        "name": "Aston Villa",
        "abbr": "AVL",
        "strength": 79,
        "country": "GB"
      },
      "start": "2026-10-11T13:00:00Z",
      "duration": 120,
      "stage": "regular",
      "rivalry": false,
      "headline": "Here is your next good game",
      "status": "scheduled",
      "isDemo": true,
      "source": "Invented sample data",
      "sport": "Football",
      "format": "Match",
      "venueZone": "Europe/London",
      "participants": [
        {
          "id": "Football:brighton-hove-albion",
          "name": "Brighton & Hove Albion",
          "abbr": "BHA",
          "strength": 75,
          "country": "GB"
        },
        {
          "id": "Football:aston-villa",
          "name": "Aston Villa",
          "abbr": "AVL",
          "strength": 79,
          "country": "GB"
        }
      ],
      "beginner": "The recommendation uses fictional ratings and stage labels; it does not predict the winner.",
      "competition": {
        "sport": "Football",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "GB"
        ],
        "code": "PL",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": true,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "GB"
      ],
      "keyPeople": {
        "label": "Team news",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Lineups and key absences not connected."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "Two sides with different strengths. Watch who sets the tempo."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [],
      "eventType": "competitive"
    },
    {
      "id": "demo-21",
      "league": "NFL",
      "away": {
        "id": "American football:buffalo-bills",
        "name": "Buffalo Bills",
        "abbr": "BUF",
        "strength": 93,
        "country": "US"
      },
      "home": {
        "id": "American football:kansas-city-chiefs",
        "name": "Kansas City Chiefs",
        "abbr": "KC",
        "strength": 94,
        "country": "US"
      },
      "start": "2026-10-11T17:00:00Z",
      "duration": 195,
      "stage": "marquee",
      "rivalry": false,
      "headline": "Put this one on the big screen",
      "status": "scheduled",
      "isDemo": true,
      "source": "Invented sample data",
      "sport": "American football",
      "format": "Match",
      "venueZone": "America/New_York",
      "participants": [
        {
          "id": "American football:buffalo-bills",
          "name": "Buffalo Bills",
          "abbr": "BUF",
          "strength": 93,
          "country": "US"
        },
        {
          "id": "American football:kansas-city-chiefs",
          "name": "Kansas City Chiefs",
          "abbr": "KC",
          "strength": 94,
          "country": "US"
        }
      ],
      "beginner": "The recommendation uses fictional ratings and stage labels; it does not predict the winner.",
      "competition": {
        "sport": "American football",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "US"
        ],
        "code": "NFL",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "espn",
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "US"
      ],
      "keyPeople": {
        "label": "Expected quarterbacks",
        "isDemo": true,
        "source": "Invented names and assignments for this demo",
        "asOf": null,
        "players": [
          {
            "teamId": "American football:buffalo-bills",
            "name": "Jordan Ellis",
            "role": "QB",
            "status": "projected",
            "quality": 92,
            "statLine": ""
          },
          {
            "teamId": "American football:kansas-city-chiefs",
            "name": "Marcus Hale",
            "role": "QB",
            "status": "projected",
            "quality": 92,
            "statLine": ""
          }
        ]
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "Two sides with different strengths. Watch who sets the tempo."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "star-players",
          "detail": "Fictional marquee player designation. Availability is not verified.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-22",
      "league": "NFL",
      "away": {
        "id": "American football:san-francisco-49ers",
        "name": "San Francisco 49ers",
        "abbr": "SF",
        "strength": 88,
        "country": "US"
      },
      "home": {
        "id": "American football:seattle-seahawks",
        "name": "Seattle Seahawks",
        "abbr": "SEA",
        "strength": 83,
        "country": "US"
      },
      "start": "2026-10-11T20:25:00Z",
      "duration": 195,
      "stage": "regular",
      "rivalry": true,
      "headline": "This one is personal",
      "status": "scheduled",
      "isDemo": true,
      "source": "Invented sample data",
      "sport": "American football",
      "format": "Match",
      "venueZone": "America/New_York",
      "participants": [
        {
          "id": "American football:san-francisco-49ers",
          "name": "San Francisco 49ers",
          "abbr": "SF",
          "strength": 88,
          "country": "US"
        },
        {
          "id": "American football:seattle-seahawks",
          "name": "Seattle Seahawks",
          "abbr": "SEA",
          "strength": 83,
          "country": "US"
        }
      ],
      "beginner": "The recommendation uses fictional ratings and stage labels; it does not predict the winner.",
      "competition": {
        "sport": "American football",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "US"
        ],
        "code": "NFL",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "espn",
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "US"
      ],
      "keyPeople": {
        "label": "Expected quarterbacks",
        "isDemo": true,
        "source": "Invented names and assignments for this demo",
        "asOf": null,
        "players": [
          {
            "teamId": "American football:san-francisco-49ers",
            "name": "Jordan Ellis",
            "role": "QB",
            "status": "projected",
            "quality": 81,
            "statLine": ""
          },
          {
            "teamId": "American football:seattle-seahawks",
            "name": "Marcus Hale",
            "role": "QB",
            "status": "projected",
            "quality": 86,
            "statLine": ""
          }
        ]
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "A familiar opponent, with a new chapter to write."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-23",
      "league": "NFL",
      "away": {
        "id": "American football:cincinnati-bengals",
        "name": "Cincinnati Bengals",
        "abbr": "CIN",
        "strength": 86,
        "country": "US"
      },
      "home": {
        "id": "American football:baltimore-ravens",
        "name": "Baltimore Ravens",
        "abbr": "BAL",
        "strength": 92,
        "country": "US"
      },
      "start": "2026-10-11T20:25:00Z",
      "duration": 195,
      "stage": "regular",
      "rivalry": true,
      "headline": "This one is personal",
      "status": "scheduled",
      "isDemo": true,
      "source": "Invented sample data",
      "sport": "American football",
      "format": "Match",
      "venueZone": "America/New_York",
      "participants": [
        {
          "id": "American football:cincinnati-bengals",
          "name": "Cincinnati Bengals",
          "abbr": "CIN",
          "strength": 86,
          "country": "US"
        },
        {
          "id": "American football:baltimore-ravens",
          "name": "Baltimore Ravens",
          "abbr": "BAL",
          "strength": 92,
          "country": "US"
        }
      ],
      "beginner": "The recommendation uses fictional ratings and stage labels; it does not predict the winner.",
      "competition": {
        "sport": "American football",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "US"
        ],
        "code": "NFL",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "espn",
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "US"
      ],
      "keyPeople": {
        "label": "Expected quarterbacks",
        "isDemo": true,
        "source": "Invented names and assignments for this demo",
        "asOf": null,
        "players": [
          {
            "teamId": "American football:cincinnati-bengals",
            "name": "Jordan Ellis",
            "role": "QB",
            "status": "projected",
            "quality": 81,
            "statLine": ""
          },
          {
            "teamId": "American football:baltimore-ravens",
            "name": "Marcus Hale",
            "role": "QB",
            "status": "projected",
            "quality": 86,
            "statLine": ""
          }
        ]
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "A familiar opponent, with a new chapter to write."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-24",
      "league": "NFL",
      "away": {
        "id": "American football:dallas-cowboys",
        "name": "Dallas Cowboys",
        "abbr": "DAL",
        "strength": 73,
        "country": "US"
      },
      "home": {
        "id": "American football:philadelphia-eagles",
        "name": "Philadelphia Eagles",
        "abbr": "PHI",
        "strength": 88,
        "country": "US"
      },
      "start": "2026-10-12T00:20:00Z",
      "duration": 195,
      "stage": "regular",
      "rivalry": true,
      "headline": "This one is personal",
      "status": "scheduled",
      "isDemo": true,
      "source": "Invented sample data",
      "sport": "American football",
      "format": "Match",
      "venueZone": "America/New_York",
      "participants": [
        {
          "id": "American football:dallas-cowboys",
          "name": "Dallas Cowboys",
          "abbr": "DAL",
          "strength": 73,
          "country": "US"
        },
        {
          "id": "American football:philadelphia-eagles",
          "name": "Philadelphia Eagles",
          "abbr": "PHI",
          "strength": 88,
          "country": "US"
        }
      ],
      "beginner": "The recommendation uses fictional ratings and stage labels; it does not predict the winner.",
      "competition": {
        "sport": "American football",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "US"
        ],
        "code": "NFL",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "espn",
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "US"
      ],
      "keyPeople": {
        "label": "Expected quarterbacks",
        "isDemo": true,
        "source": "Invented names and assignments for this demo",
        "asOf": null,
        "players": [
          {
            "teamId": "American football:dallas-cowboys",
            "name": "Jordan Ellis",
            "role": "QB",
            "status": "projected",
            "quality": 81,
            "statLine": ""
          },
          {
            "teamId": "American football:philadelphia-eagles",
            "name": "Marcus Hale",
            "role": "QB",
            "status": "projected",
            "quality": 86,
            "statLine": ""
          }
        ]
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "A familiar opponent, with a new chapter to write."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-25",
      "league": "WNBA",
      "away": {
        "id": "Basketball:minnesota-lynx",
        "name": "Minnesota Lynx",
        "abbr": "MIN",
        "strength": 89,
        "country": "US"
      },
      "home": {
        "id": "Basketball:indiana-fever",
        "name": "Indiana Fever",
        "abbr": "IND",
        "strength": 82,
        "country": "US"
      },
      "start": "2026-10-11T19:00:00Z",
      "duration": 135,
      "stage": "postseason",
      "rivalry": false,
      "headline": "Here is your next good game",
      "status": "scheduled",
      "isDemo": true,
      "source": "Invented sample data",
      "sport": "Basketball",
      "format": "Match",
      "venueZone": "America/New_York",
      "participants": [
        {
          "id": "Basketball:minnesota-lynx",
          "name": "Minnesota Lynx",
          "abbr": "MIN",
          "strength": 89,
          "country": "US"
        },
        {
          "id": "Basketball:indiana-fever",
          "name": "Indiana Fever",
          "abbr": "IND",
          "strength": 82,
          "country": "US"
        }
      ],
      "beginner": "The recommendation uses fictional ratings and stage labels; it does not predict the winner.",
      "competition": {
        "sport": "Basketball",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "US",
          "CA"
        ],
        "code": "WNBA",
        "coverage": "demo_only",
        "category": "women",
        "nature": "competitive",
        "sourceRefs": [
          "espn",
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "women"
        ]
      },
      "countries": [
        "US",
        "CA"
      ],
      "keyPeople": {
        "label": "Top scorers",
        "type": "scoring_leaders",
        "metric": "points_per_game",
        "statsPeriod": "Fictional season averages",
        "isDemo": true,
        "source": "Invented demo names and season statistics; not actual roster information",
        "asOf": null,
        "players": [
          {
            "teamId": "Basketball:minnesota-lynx",
            "name": "Nia Ellis",
            "role": "Guard / forward",
            "status": "unverified",
            "availability": "Not verified",
            "stats": {
              "ppg": 25.0,
              "rpg": 5.5,
              "apg": 5.8
            },
            "statLine": "25.0 PPG · 5.5 RPG · 5.8 APG"
          },
          {
            "teamId": "Basketball:indiana-fever",
            "name": "Avery Carter",
            "role": "Guard / forward",
            "status": "unverified",
            "availability": "Not verified",
            "stats": {
              "ppg": 25.7,
              "rpg": 5.9,
              "apg": 6.1
            },
            "statLine": "25.7 PPG · 5.9 RPG · 6.1 APG"
          }
        ],
        "note": "One sample leading scorer per team. Playing status not verified."
      },
      "promo": {
        "heading": "The postseason starts here.",
        "body": "Two sides with different strengths. Watch who sets the tempo."
      },
      "watchOptions": [],
      "category": "women",
      "tagEvidence": [
        {
          "id": "playoffs",
          "detail": "Part of the sample postseason.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-26",
      "league": "MLB",
      "away": {
        "id": "Baseball:baltimore-orioles",
        "name": "Baltimore Orioles",
        "abbr": "BAL",
        "strength": 86,
        "country": "US"
      },
      "home": {
        "id": "Baseball:new-york-yankees",
        "name": "New York Yankees",
        "abbr": "NYY",
        "strength": 91,
        "country": "US"
      },
      "start": "2026-10-11T23:10:00Z",
      "duration": 180,
      "stage": "postseason",
      "rivalry": false,
      "headline": "October. no easy outs",
      "status": "scheduled",
      "isDemo": true,
      "source": "Invented sample data",
      "sport": "Baseball",
      "format": "Match",
      "venueZone": "America/New_York",
      "participants": [
        {
          "id": "Baseball:baltimore-orioles",
          "name": "Baltimore Orioles",
          "abbr": "BAL",
          "strength": 86,
          "country": "US"
        },
        {
          "id": "Baseball:new-york-yankees",
          "name": "New York Yankees",
          "abbr": "NYY",
          "strength": 91,
          "country": "US"
        }
      ],
      "beginner": "The recommendation uses fictional ratings and stage labels; it does not predict the winner.",
      "competition": {
        "sport": "Baseball",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "US",
          "CA"
        ],
        "code": "MLB",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "espn",
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "US",
        "CA"
      ],
      "keyPeople": {
        "label": "Probable pitchers",
        "isDemo": true,
        "source": "Invented names and assignments for this demo",
        "asOf": null,
        "players": [
          {
            "teamId": "Baseball:baltimore-orioles",
            "name": "Alex Mercer",
            "role": "RHP",
            "status": "probable",
            "quality": 81,
            "statLine": "2.84 ERA · 1.03 WHIP"
          },
          {
            "teamId": "Baseball:new-york-yankees",
            "name": null,
            "role": "LHP",
            "status": "unknown",
            "quality": null,
            "statLine": ""
          }
        ]
      },
      "promo": {
        "heading": "The postseason starts here.",
        "body": "Two sides with different strengths. Watch who sets the tempo."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "playoffs",
          "detail": "Part of the sample postseason.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-27",
      "league": "MLS",
      "away": {
        "id": "Football:seattle-sounders-fc",
        "name": "Seattle Sounders FC",
        "abbr": "SEA",
        "strength": 83,
        "country": "US"
      },
      "home": {
        "id": "Football:san-jose-earthquakes",
        "name": "San Jose Earthquakes",
        "abbr": "SJ",
        "strength": 64,
        "country": "US"
      },
      "start": "2026-10-11T21:00:00Z",
      "duration": 120,
      "stage": "regular",
      "rivalry": false,
      "headline": "Here is your next good game",
      "status": "scheduled",
      "isDemo": true,
      "source": "Invented sample data",
      "sport": "Football",
      "format": "Match",
      "venueZone": "America/New_York",
      "participants": [
        {
          "id": "Football:seattle-sounders-fc",
          "name": "Seattle Sounders FC",
          "abbr": "SEA",
          "strength": 83,
          "country": "US"
        },
        {
          "id": "Football:san-jose-earthquakes",
          "name": "San Jose Earthquakes",
          "abbr": "SJ",
          "strength": 64,
          "country": "US"
        }
      ],
      "beginner": "The recommendation uses fictional ratings and stage labels; it does not predict the winner.",
      "competition": {
        "sport": "Football",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "US",
          "CA"
        ],
        "code": "MLS",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "US",
        "CA"
      ],
      "keyPeople": {
        "label": "Team news",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Lineups and key absences not connected."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "Two sides with different strengths. Watch who sets the tempo."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "playoff-race",
          "detail": "Fictional qualification-race context.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-28",
      "league": "NHL",
      "away": {
        "id": "Ice hockey:new-jersey-devils",
        "name": "New Jersey Devils",
        "abbr": "NJD",
        "strength": 86,
        "country": "US"
      },
      "home": {
        "id": "Ice hockey:new-york-rangers",
        "name": "New York Rangers",
        "abbr": "NYR",
        "strength": 87,
        "country": "US"
      },
      "start": "2026-10-12T01:00:00Z",
      "duration": 165,
      "stage": "regular",
      "rivalry": true,
      "headline": "This one is personal",
      "status": "scheduled",
      "isDemo": true,
      "source": "Invented sample data",
      "sport": "Ice hockey",
      "format": "Match",
      "venueZone": "America/New_York",
      "participants": [
        {
          "id": "Ice hockey:new-jersey-devils",
          "name": "New Jersey Devils",
          "abbr": "NJD",
          "strength": 86,
          "country": "US"
        },
        {
          "id": "Ice hockey:new-york-rangers",
          "name": "New York Rangers",
          "abbr": "NYR",
          "strength": 87,
          "country": "US"
        }
      ],
      "beginner": "The recommendation uses fictional ratings and stage labels; it does not predict the winner.",
      "competition": {
        "sport": "Ice hockey",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "US",
          "CA"
        ],
        "code": "NHL",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "espn",
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "US",
        "CA"
      ],
      "keyPeople": {
        "label": "Top scorers",
        "type": "scoring_leaders",
        "metric": "points",
        "statsPeriod": "Fictional season totals",
        "isDemo": true,
        "source": "Invented demo names and season statistics; not actual roster information",
        "asOf": null,
        "players": [
          {
            "teamId": "Ice hockey:new-jersey-devils",
            "name": "Avery Knox",
            "role": "Forward",
            "status": "unverified",
            "availability": "Not verified",
            "stats": {
              "goals": 31,
              "assists": 45,
              "points": 76
            },
            "statLine": "76 PTS · 31 G · 45 A"
          },
          {
            "teamId": "Ice hockey:new-york-rangers",
            "name": "Mason Vale",
            "role": "Forward",
            "status": "unverified",
            "availability": "Not verified",
            "stats": {
              "goals": 34,
              "assists": 47,
              "points": 81
            },
            "statLine": "81 PTS · 34 G · 47 A"
          }
        ],
        "note": "One sample leading scorer per team. Playing status not verified."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "A familiar opponent, with a new chapter to write."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-29",
      "league": "IPL",
      "sport": "Cricket",
      "participants": [
        {
          "id": "Cricket:mumbai-indians",
          "name": "Mumbai Indians",
          "abbr": "MI",
          "strength": 94,
          "country": "IN"
        },
        {
          "id": "Cricket:chennai-super-kings",
          "name": "Chennai Super Kings",
          "abbr": "CSK",
          "strength": 93,
          "country": "IN"
        }
      ],
      "start": "2026-10-10T14:00:00Z",
      "duration": 240,
      "stage": "final",
      "rivalry": true,
      "headline": "One trophy. zero room to hide",
      "status": "scheduled",
      "format": "T20",
      "venueZone": "Asia/Kolkata",
      "isDemo": true,
      "source": "Invented sample data",
      "beginner": "In this sample, the winner takes the title. The card shows a full estimated T20 match, not just its starting time.",
      "away": {
        "id": "Cricket:mumbai-indians",
        "name": "Mumbai Indians",
        "abbr": "MI",
        "strength": 94,
        "country": "IN"
      },
      "home": {
        "id": "Cricket:chennai-super-kings",
        "name": "Chennai Super Kings",
        "abbr": "CSK",
        "strength": 93,
        "country": "IN"
      },
      "noteworthy": {
        "score": 99,
        "reason": "Mumbai. Chennai. One match for the title. You do not need to know every fielding position to feel this one. Put it on."
      },
      "competition": {
        "sport": "Cricket",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "IN"
        ],
        "code": "IPL",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "espn",
          "sky",
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "IN"
      ],
      "keyPeople": {
        "label": "Playing XI & key matchups",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Playing XIs not available in this demo. Live version: confirmed XI, key batters/bowlers and late changes."
      },
      "promo": {
        "heading": "A title on the line.",
        "body": "Mumbai. Chennai. One match for the title. You do not need to know every fielding position to feel this one. Put it on."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        },
        {
          "id": "championship",
          "detail": "The sample event is a title final.",
          "isDemo": true
        },
        {
          "id": "playoffs",
          "detail": "Part of the sample postseason.",
          "isDemo": true
        },
        {
          "id": "elimination",
          "detail": "The fictional final is winner-take-all.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-30",
      "league": "International cricket · men",
      "sport": "Cricket",
      "participants": [
        {
          "id": "Cricket:india",
          "name": "India",
          "abbr": "IND",
          "strength": 95,
          "country": "IN"
        },
        {
          "id": "Cricket:australia",
          "name": "Australia",
          "abbr": "AUS",
          "strength": 94,
          "country": "AU"
        }
      ],
      "start": "2026-10-11T09:00:00Z",
      "duration": 480,
      "stage": "decider",
      "rivalry": false,
      "headline": "The series comes down to this",
      "status": "scheduled",
      "format": "ODI",
      "venueZone": "Asia/Kolkata",
      "isDemo": true,
      "source": "Invented sample data",
      "beginner": "This sample uses an eight-hour estimated ODI window. Choose “On during my window” to catch only the part you are free for.",
      "away": {
        "id": "Cricket:india",
        "name": "India",
        "abbr": "IND",
        "strength": 95,
        "country": "IN"
      },
      "home": {
        "id": "Cricket:australia",
        "name": "Australia",
        "abbr": "AUS",
        "strength": 94,
        "country": "AU"
      },
      "noteworthy": {
        "score": 96,
        "reason": "India versus Australia, with the series there for the taking. Cancel the background noise. This deserves your attention."
      },
      "competition": {
        "sport": "Cricket",
        "scope": "international",
        "tier": 1,
        "allowedException": false,
        "countries": [],
        "code": "INT",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "espn",
          "sky",
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "men"
        ]
      },
      "countries": [],
      "keyPeople": {
        "label": "Playing XI & key matchups",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Playing XIs not available in this demo. Live version: confirmed XI, key batters/bowlers and late changes."
      },
      "promo": {
        "heading": "The series comes down to this.",
        "body": "India versus Australia, with the series there for the taking. Cancel the background noise. This deserves your attention."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [],
      "eventType": "competitive"
    },
    {
      "id": "demo-31",
      "league": "International cricket · men",
      "sport": "Cricket",
      "participants": [
        {
          "id": "Cricket:india",
          "name": "India",
          "abbr": "IND",
          "strength": 95,
          "country": "IN"
        },
        {
          "id": "Cricket:england",
          "name": "England",
          "abbr": "ENG",
          "strength": 90,
          "country": "GB"
        }
      ],
      "start": "2026-10-08T04:30:00Z",
      "duration": 120,
      "stage": "marquee",
      "rivalry": false,
      "headline": "Here is your next good game",
      "status": "scheduled",
      "format": "Test",
      "venueZone": "Asia/Kolkata",
      "isDemo": true,
      "source": "Invented sample data",
      "beginner": "A multi-day match is split into playing sessions. Breaks and overnight gaps are not treated as watchable sport.",
      "away": {
        "id": "Cricket:india",
        "name": "India",
        "abbr": "IND",
        "strength": 95,
        "country": "IN"
      },
      "home": {
        "id": "Cricket:england",
        "name": "England",
        "abbr": "ENG",
        "strength": 90,
        "country": "GB"
      },
      "noteworthy": {
        "score": 90,
        "reason": "India against England. A matchup worth making room for. Turn it on, pick your side, and see who takes control."
      },
      "sessions": [
        {
          "label": "Day 1 · morning",
          "start": "2026-10-08T04:30:00Z",
          "end": "2026-10-08T06:30:00Z"
        },
        {
          "label": "Day 1 · afternoon",
          "start": "2026-10-08T07:30:00Z",
          "end": "2026-10-08T09:30:00Z"
        },
        {
          "label": "Day 1 · evening",
          "start": "2026-10-08T10:00:00Z",
          "end": "2026-10-08T12:00:00Z"
        },
        {
          "label": "Day 2 · morning",
          "start": "2026-10-09T04:30:00Z",
          "end": "2026-10-09T06:30:00Z"
        },
        {
          "label": "Day 2 · afternoon",
          "start": "2026-10-09T07:30:00Z",
          "end": "2026-10-09T09:30:00Z"
        },
        {
          "label": "Day 2 · evening",
          "start": "2026-10-09T10:00:00Z",
          "end": "2026-10-09T12:00:00Z"
        },
        {
          "label": "Day 3 · morning",
          "start": "2026-10-10T04:30:00Z",
          "end": "2026-10-10T06:30:00Z"
        },
        {
          "label": "Day 3 · afternoon",
          "start": "2026-10-10T07:30:00Z",
          "end": "2026-10-10T09:30:00Z"
        },
        {
          "label": "Day 3 · evening",
          "start": "2026-10-10T10:00:00Z",
          "end": "2026-10-10T12:00:00Z"
        },
        {
          "label": "Day 4 · morning",
          "start": "2026-10-11T04:30:00Z",
          "end": "2026-10-11T06:30:00Z"
        },
        {
          "label": "Day 4 · afternoon",
          "start": "2026-10-11T07:30:00Z",
          "end": "2026-10-11T09:30:00Z"
        },
        {
          "label": "Day 4 · evening",
          "start": "2026-10-11T10:00:00Z",
          "end": "2026-10-11T12:00:00Z"
        },
        {
          "label": "Day 5 · morning",
          "start": "2026-10-12T04:30:00Z",
          "end": "2026-10-12T06:30:00Z"
        },
        {
          "label": "Day 5 · afternoon",
          "start": "2026-10-12T07:30:00Z",
          "end": "2026-10-12T09:30:00Z"
        },
        {
          "label": "Day 5 · evening",
          "start": "2026-10-12T10:00:00Z",
          "end": "2026-10-12T12:00:00Z"
        }
      ],
      "competition": {
        "sport": "Cricket",
        "scope": "international",
        "tier": 1,
        "allowedException": false,
        "countries": [],
        "code": "INT",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "espn",
          "sky",
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "men"
        ]
      },
      "countries": [],
      "keyPeople": {
        "label": "Playing XI & key matchups",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Playing XIs not available in this demo. Live version: confirmed XI, key batters/bowlers and late changes."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "India against England. A matchup worth making room for. Turn it on, pick your side, and see who takes control."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [],
      "eventType": "competitive"
    },
    {
      "id": "demo-34",
      "league": "AFL",
      "sport": "Australian rules",
      "participants": [
        {
          "id": "Australian rules:sydney-swans",
          "name": "Sydney Swans",
          "abbr": "SYD",
          "strength": 94,
          "country": "AU"
        },
        {
          "id": "Australian rules:collingwood",
          "name": "Collingwood",
          "abbr": "COL",
          "strength": 93,
          "country": "AU"
        }
      ],
      "start": "2026-10-10T03:30:00Z",
      "duration": 180,
      "stage": "final",
      "rivalry": false,
      "headline": "One flag. two teams. all in",
      "status": "scheduled",
      "format": "Grand Final",
      "venueZone": "Australia/Melbourne",
      "isDemo": true,
      "source": "Invented sample data",
      "beginner": "A championship decider in the fictional dataset. Check the LOCAL date: Saturday in Melbourne can be Friday where you are.",
      "away": {
        "id": "Australian rules:sydney-swans",
        "name": "Sydney Swans",
        "abbr": "SYD",
        "strength": 94,
        "country": "AU"
      },
      "home": {
        "id": "Australian rules:collingwood",
        "name": "Collingwood",
        "abbr": "COL",
        "strength": 93,
        "country": "AU"
      },
      "noteworthy": {
        "score": 100,
        "reason": "Sydney and Collingwood with the premiership on the line. New to footy? Start with the biggest stage. This is your invitation."
      },
      "competition": {
        "sport": "Australian rules",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "AU"
        ],
        "code": "AFL",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "kayo",
          "sky"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "AU"
      ],
      "promo": {
        "heading": "A title on the line.",
        "body": "Sydney and Collingwood with the premiership on the line. New to footy? Start with the biggest stage. This is your invitation."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "championship",
          "detail": "The sample event is a title final.",
          "isDemo": true
        },
        {
          "id": "playoffs",
          "detail": "Part of the sample postseason.",
          "isDemo": true
        },
        {
          "id": "elimination",
          "detail": "The fictional final is winner-take-all.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-35",
      "league": "AFL",
      "sport": "Australian rules",
      "participants": [
        {
          "id": "Australian rules:carlton",
          "name": "Carlton",
          "abbr": "CAR",
          "strength": 87,
          "country": "AU"
        },
        {
          "id": "Australian rules:richmond",
          "name": "Richmond",
          "abbr": "RIC",
          "strength": 82,
          "country": "AU"
        }
      ],
      "start": "2026-10-11T05:40:00Z",
      "duration": 180,
      "stage": "regular",
      "rivalry": true,
      "headline": "This one is personal",
      "status": "scheduled",
      "format": "Match",
      "venueZone": "Australia/Melbourne",
      "isDemo": true,
      "source": "Invented sample data",
      "beginner": "",
      "away": {
        "id": "Australian rules:carlton",
        "name": "Carlton",
        "abbr": "CAR",
        "strength": 87,
        "country": "AU"
      },
      "home": {
        "id": "Australian rules:richmond",
        "name": "Richmond",
        "abbr": "RIC",
        "strength": 82,
        "country": "AU"
      },
      "competition": {
        "sport": "Australian rules",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "AU"
        ],
        "code": "AFL",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "kayo",
          "sky"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "AU"
      ],
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "A familiar opponent, with a new chapter to write."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-36",
      "league": "AFLW",
      "sport": "Australian rules",
      "participants": [
        {
          "id": "Australian rules:adelaide-women",
          "name": "Adelaide Women",
          "abbr": "ADE",
          "strength": 94,
          "country": "AU"
        },
        {
          "id": "Australian rules:brisbane-lions-women",
          "name": "Brisbane Lions Women",
          "abbr": "BRI",
          "strength": 93,
          "country": "AU"
        }
      ],
      "start": "2026-10-11T04:00:00Z",
      "duration": 120,
      "stage": "semifinal",
      "rivalry": false,
      "headline": "The final is calling",
      "status": "scheduled",
      "format": "Semifinal",
      "venueZone": "Australia/Melbourne",
      "isDemo": true,
      "source": "Invented sample data",
      "beginner": "The women’s Australian rules competition is a separate filter. This sample estimates a two-hour viewing block.",
      "away": {
        "id": "Australian rules:adelaide-women",
        "name": "Adelaide Women",
        "abbr": "ADE",
        "strength": 94,
        "country": "AU"
      },
      "home": {
        "id": "Australian rules:brisbane-lions-women",
        "name": "Brisbane Lions Women",
        "abbr": "BRI",
        "strength": 93,
        "country": "AU"
      },
      "noteworthy": {
        "score": 94,
        "reason": "Adelaide Women and Brisbane Lions Women are on the semifinal stage. A shot at the title is getting closer. Get this one on your screen."
      },
      "competition": {
        "sport": "Australian rules",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "AU"
        ],
        "code": "AFLW",
        "coverage": "demo_only",
        "category": "women",
        "nature": "competitive",
        "sourceRefs": [
          "kayo",
          "sky"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "women"
        ]
      },
      "countries": [
        "AU"
      ],
      "promo": {
        "heading": "One step from the final.",
        "body": "Adelaide Women and Brisbane Lions Women are on the semifinal stage. A shot at the title is getting closer. Get this one on your screen."
      },
      "watchOptions": [],
      "category": "women",
      "tagEvidence": [
        {
          "id": "playoffs",
          "detail": "Part of the sample postseason.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-37",
      "league": "La Liga",
      "sport": "Football",
      "participants": [
        {
          "id": "Football:real-madrid",
          "name": "Real Madrid",
          "abbr": "RMA",
          "strength": 95,
          "country": "ES"
        },
        {
          "id": "Football:barcelona",
          "name": "Barcelona",
          "abbr": "BAR",
          "strength": 94,
          "country": "ES"
        }
      ],
      "start": "2026-10-10T19:00:00Z",
      "duration": 120,
      "stage": "marquee",
      "rivalry": true,
      "headline": "This one is personal",
      "status": "scheduled",
      "format": "Match",
      "venueZone": "Europe/Madrid",
      "isDemo": true,
      "source": "Invented sample data",
      "beginner": "",
      "away": {
        "id": "Football:real-madrid",
        "name": "Real Madrid",
        "abbr": "RMA",
        "strength": 95,
        "country": "ES"
      },
      "home": {
        "id": "Football:barcelona",
        "name": "Barcelona",
        "abbr": "BAR",
        "strength": 94,
        "country": "ES"
      },
      "noteworthy": {
        "score": 93,
        "reason": "Real Madrid. Barcelona. A rivalry with bragging rights attached. Pick a side—or just enjoy how much they want to beat each other."
      },
      "competition": {
        "sport": "Football",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "ES"
        ],
        "code": "LL",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": true,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "ES"
      ],
      "keyPeople": {
        "label": "Team news",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Lineups and key absences not connected."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "Real Madrid. Barcelona. A rivalry with bragging rights attached. Pick a side—or just enjoy how much they want to beat each other."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        },
        {
          "id": "title-race",
          "detail": "Fictional league title-race context.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-38",
      "league": "Bundesliga",
      "sport": "Football",
      "participants": [
        {
          "id": "Football:bayern-munich",
          "name": "Bayern Munich",
          "abbr": "BAY",
          "strength": 94,
          "country": "DE"
        },
        {
          "id": "Football:borussia-dortmund",
          "name": "Borussia Dortmund",
          "abbr": "BVB",
          "strength": 87,
          "country": "DE"
        }
      ],
      "start": "2026-10-10T16:30:00Z",
      "duration": 120,
      "stage": "marquee",
      "rivalry": true,
      "headline": "This one is personal",
      "status": "scheduled",
      "format": "Match",
      "venueZone": "Europe/Berlin",
      "isDemo": true,
      "source": "Invented sample data",
      "beginner": "",
      "away": {
        "id": "Football:bayern-munich",
        "name": "Bayern Munich",
        "abbr": "BAY",
        "strength": 94,
        "country": "DE"
      },
      "home": {
        "id": "Football:borussia-dortmund",
        "name": "Borussia Dortmund",
        "abbr": "BVB",
        "strength": 87,
        "country": "DE"
      },
      "competition": {
        "sport": "Football",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "DE"
        ],
        "code": "B",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": true,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "DE"
      ],
      "keyPeople": {
        "label": "Team news",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Lineups and key absences not connected."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "A familiar opponent, with a new chapter to write."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-39",
      "league": "Serie A",
      "sport": "Football",
      "participants": [
        {
          "id": "Football:inter",
          "name": "Inter",
          "abbr": "INT",
          "strength": 92,
          "country": "IT"
        },
        {
          "id": "Football:ac-milan",
          "name": "AC Milan",
          "abbr": "MIL",
          "strength": 88,
          "country": "IT"
        }
      ],
      "start": "2026-10-11T18:45:00Z",
      "duration": 120,
      "stage": "marquee",
      "rivalry": true,
      "headline": "This one is personal",
      "status": "scheduled",
      "format": "Match",
      "venueZone": "Europe/Rome",
      "isDemo": true,
      "source": "Invented sample data",
      "beginner": "",
      "away": {
        "id": "Football:inter",
        "name": "Inter",
        "abbr": "INT",
        "strength": 92,
        "country": "IT"
      },
      "home": {
        "id": "Football:ac-milan",
        "name": "AC Milan",
        "abbr": "MIL",
        "strength": 88,
        "country": "IT"
      },
      "competition": {
        "sport": "Football",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "IT"
        ],
        "code": "SA",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": true,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "IT"
      ],
      "keyPeople": {
        "label": "Team news",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Lineups and key absences not connected."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "A familiar opponent, with a new chapter to write."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-40",
      "league": "Ligue 1",
      "sport": "Football",
      "participants": [
        {
          "id": "Football:paris-saint-germain",
          "name": "Paris Saint-Germain",
          "abbr": "PSG",
          "strength": 94,
          "country": "FR"
        },
        {
          "id": "Football:marseille",
          "name": "Marseille",
          "abbr": "OM",
          "strength": 82,
          "country": "FR"
        }
      ],
      "start": "2026-10-11T18:45:00Z",
      "duration": 120,
      "stage": "marquee",
      "rivalry": true,
      "headline": "This one is personal",
      "status": "scheduled",
      "format": "Match",
      "venueZone": "Europe/Paris",
      "isDemo": true,
      "source": "Invented sample data",
      "beginner": "",
      "away": {
        "id": "Football:paris-saint-germain",
        "name": "Paris Saint-Germain",
        "abbr": "PSG",
        "strength": 94,
        "country": "FR"
      },
      "home": {
        "id": "Football:marseille",
        "name": "Marseille",
        "abbr": "OM",
        "strength": 82,
        "country": "FR"
      },
      "competition": {
        "sport": "Football",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "FR"
        ],
        "code": "L1",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": true,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "FR"
      ],
      "keyPeople": {
        "label": "Team news",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Lineups and key absences not connected."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "A familiar opponent, with a new chapter to write."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-41",
      "league": "Liga MX",
      "sport": "Football",
      "participants": [
        {
          "id": "Football:club-america",
          "name": "Club América",
          "abbr": "AME",
          "strength": 90,
          "country": "MX"
        },
        {
          "id": "Football:cruz-azul",
          "name": "Cruz Azul",
          "abbr": "CAZ",
          "strength": 88,
          "country": "MX"
        }
      ],
      "start": "2026-10-11T01:00:00Z",
      "duration": 120,
      "stage": "regular",
      "rivalry": true,
      "headline": "This one is personal",
      "status": "scheduled",
      "format": "Match",
      "venueZone": "America/Mexico_City",
      "isDemo": true,
      "source": "Invented sample data",
      "beginner": "",
      "away": {
        "id": "Football:club-america",
        "name": "Club América",
        "abbr": "AME",
        "strength": 90,
        "country": "MX"
      },
      "home": {
        "id": "Football:cruz-azul",
        "name": "Cruz Azul",
        "abbr": "CAZ",
        "strength": 88,
        "country": "MX"
      },
      "competition": {
        "sport": "Football",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "MX"
        ],
        "code": "LM",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "MX"
      ],
      "keyPeople": {
        "label": "Team news",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Lineups and key absences not connected."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "A familiar opponent, with a new chapter to write."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-42",
      "league": "Brasileirão",
      "sport": "Football",
      "participants": [
        {
          "id": "Football:flamengo",
          "name": "Flamengo",
          "abbr": "FLA",
          "strength": 92,
          "country": "BR"
        },
        {
          "id": "Football:fluminense",
          "name": "Fluminense",
          "abbr": "FLU",
          "strength": 87,
          "country": "BR"
        }
      ],
      "start": "2026-10-11T19:00:00Z",
      "duration": 120,
      "stage": "regular",
      "rivalry": true,
      "headline": "This one is personal",
      "status": "scheduled",
      "format": "Match",
      "venueZone": "America/Sao_Paulo",
      "isDemo": true,
      "source": "Invented sample data",
      "beginner": "",
      "away": {
        "id": "Football:flamengo",
        "name": "Flamengo",
        "abbr": "FLA",
        "strength": 92,
        "country": "BR"
      },
      "home": {
        "id": "Football:fluminense",
        "name": "Fluminense",
        "abbr": "FLU",
        "strength": 87,
        "country": "BR"
      },
      "competition": {
        "sport": "Football",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "BR"
        ],
        "code": "B",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": true,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "BR"
      ],
      "keyPeople": {
        "label": "Team news",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Lineups and key absences not connected."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "A familiar opponent, with a new chapter to write."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        },
        {
          "id": "title-race",
          "detail": "Fictional league title-race context.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-43",
      "league": "EuroLeague",
      "sport": "Basketball",
      "participants": [
        {
          "id": "Basketball:olympiacos",
          "name": "Olympiacos",
          "abbr": "OLY",
          "strength": 92,
          "country": "GR"
        },
        {
          "id": "Basketball:panathinaikos",
          "name": "Panathinaikos",
          "abbr": "PAN",
          "strength": 91,
          "country": "GR"
        }
      ],
      "start": "2026-10-09T18:00:00Z",
      "duration": 135,
      "stage": "marquee",
      "rivalry": true,
      "headline": "This one is personal",
      "status": "scheduled",
      "format": "Match",
      "venueZone": "Europe/Athens",
      "isDemo": true,
      "source": "Invented sample data",
      "beginner": "",
      "away": {
        "id": "Basketball:olympiacos",
        "name": "Olympiacos",
        "abbr": "OLY",
        "strength": 92,
        "country": "GR"
      },
      "home": {
        "id": "Basketball:panathinaikos",
        "name": "Panathinaikos",
        "abbr": "PAN",
        "strength": 91,
        "country": "GR"
      },
      "competition": {
        "sport": "Basketball",
        "scope": "international",
        "tier": 1,
        "allowedException": false,
        "countries": [],
        "code": "E",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "espn",
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "men"
        ]
      },
      "countries": [],
      "keyPeople": {
        "label": "Top scorers",
        "type": "scoring_leaders",
        "metric": "points_per_game",
        "statsPeriod": "Fictional season averages",
        "isDemo": true,
        "source": "Invented demo names and season statistics; not actual roster information",
        "asOf": null,
        "players": [
          {
            "teamId": "Basketball:olympiacos",
            "name": "Darius Hayes",
            "role": "Guard / forward",
            "status": "unverified",
            "availability": "Not verified",
            "stats": {
              "ppg": 18.6,
              "rpg": 4.7,
              "apg": 5.2
            },
            "statLine": "18.6 PPG · 4.7 RPG · 5.2 APG"
          },
          {
            "teamId": "Basketball:panathinaikos",
            "name": "Micah Brooks",
            "role": "Guard / forward",
            "status": "unverified",
            "availability": "Not verified",
            "stats": {
              "ppg": 19.3,
              "rpg": 5.1,
              "apg": 5.5
            },
            "statLine": "19.3 PPG · 5.1 RPG · 5.5 APG"
          }
        ],
        "note": "One sample leading scorer per team. Playing status not verified."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "A familiar opponent, with a new chapter to write."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-44",
      "league": "NPB",
      "sport": "Baseball",
      "participants": [
        {
          "id": "Baseball:hanshin-tigers",
          "name": "Hanshin Tigers",
          "abbr": "HAN",
          "strength": 91,
          "country": "JP"
        },
        {
          "id": "Baseball:yomiuri-giants",
          "name": "Yomiuri Giants",
          "abbr": "YOM",
          "strength": 89,
          "country": "JP"
        }
      ],
      "start": "2026-10-10T09:00:00Z",
      "duration": 195,
      "stage": "postseason",
      "rivalry": true,
      "headline": "October. no easy outs",
      "status": "scheduled",
      "format": "Match",
      "venueZone": "Asia/Tokyo",
      "isDemo": true,
      "source": "Invented sample data",
      "beginner": "",
      "away": {
        "id": "Baseball:hanshin-tigers",
        "name": "Hanshin Tigers",
        "abbr": "HAN",
        "strength": 91,
        "country": "JP"
      },
      "home": {
        "id": "Baseball:yomiuri-giants",
        "name": "Yomiuri Giants",
        "abbr": "YOM",
        "strength": 89,
        "country": "JP"
      },
      "noteworthy": {
        "score": 90,
        "reason": "Hanshin Tigers and Yomiuri Giants in the postseason. Every baserunner cranks up the pressure. This is not a check-the-score-later game."
      },
      "competition": {
        "sport": "Baseball",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "JP"
        ],
        "code": "NPB",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "sportsnavi"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "JP"
      ],
      "keyPeople": {
        "label": "Probable pitchers",
        "isDemo": true,
        "source": "Invented names and assignments for this demo",
        "asOf": null,
        "players": [
          {
            "teamId": "Baseball:hanshin-tigers",
            "name": "Alex Mercer",
            "role": "RHP",
            "status": "probable",
            "quality": 81,
            "statLine": "2.84 ERA · 1.03 WHIP"
          },
          {
            "teamId": "Baseball:yomiuri-giants",
            "name": "Luis Vega",
            "role": "LHP",
            "status": "probable",
            "quality": 86,
            "statLine": "3.16 ERA · 1.09 WHIP"
          }
        ]
      },
      "promo": {
        "heading": "The postseason starts here.",
        "body": "Hanshin Tigers and Yomiuri Giants in the postseason. Every baserunner cranks up the pressure. This is not a check-the-score-later game."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        },
        {
          "id": "playoffs",
          "detail": "Part of the sample postseason.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-45",
      "league": "International rugby",
      "sport": "Rugby",
      "participants": [
        {
          "id": "Rugby:south-africa",
          "name": "South Africa",
          "abbr": "RSA",
          "strength": 95,
          "country": "ZA"
        },
        {
          "id": "Rugby:new-zealand",
          "name": "New Zealand",
          "abbr": "NZL",
          "strength": 94,
          "country": "NZ"
        }
      ],
      "start": "2026-10-10T15:00:00Z",
      "duration": 120,
      "stage": "decider",
      "rivalry": true,
      "headline": "The series comes down to this",
      "status": "scheduled",
      "format": "Rugby union",
      "venueZone": "Africa/Johannesburg",
      "isDemo": true,
      "source": "Invented sample data",
      "beginner": "",
      "away": {
        "id": "Rugby:south-africa",
        "name": "South Africa",
        "abbr": "RSA",
        "strength": 95,
        "country": "ZA"
      },
      "home": {
        "id": "Rugby:new-zealand",
        "name": "New Zealand",
        "abbr": "NZL",
        "strength": 94,
        "country": "NZ"
      },
      "noteworthy": {
        "score": 95,
        "reason": "South Africa versus New Zealand, with the series there for the taking. Cancel the background noise. This deserves your attention."
      },
      "competition": {
        "sport": "Rugby",
        "scope": "international",
        "tier": 1,
        "allowedException": false,
        "countries": [],
        "code": "INT",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "kayo",
          "sky"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "men"
        ]
      },
      "countries": [],
      "keyPeople": {
        "label": "Projected playmakers",
        "isDemo": true,
        "source": "Invented names and assignments for this demo",
        "asOf": null,
        "players": [
          {
            "teamId": "Rugby:south-africa",
            "name": "Theo Laurent",
            "role": "Fly-half",
            "status": "projected",
            "quality": 81,
            "statLine": ""
          },
          {
            "teamId": "Rugby:new-zealand",
            "name": "Finn Carter",
            "role": "Fly-half",
            "status": "projected",
            "quality": 86,
            "statLine": ""
          }
        ]
      },
      "promo": {
        "heading": "The series comes down to this.",
        "body": "South Africa versus New Zealand, with the series there for the taking. Cancel the background noise. This deserves your attention."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-46",
      "league": "Top 14",
      "sport": "Rugby",
      "participants": [
        {
          "id": "Rugby:toulouse",
          "name": "Toulouse",
          "abbr": "TOU",
          "strength": 93,
          "country": "FR"
        },
        {
          "id": "Rugby:bordeaux-begles",
          "name": "Bordeaux Bègles",
          "abbr": "UBB",
          "strength": 90,
          "country": "FR"
        }
      ],
      "start": "2026-10-10T19:05:00Z",
      "duration": 120,
      "stage": "regular",
      "rivalry": false,
      "headline": "Here is your next good game",
      "status": "scheduled",
      "format": "Rugby union",
      "venueZone": "Europe/Paris",
      "isDemo": true,
      "source": "Invented sample data",
      "beginner": "",
      "away": {
        "id": "Rugby:toulouse",
        "name": "Toulouse",
        "abbr": "TOU",
        "strength": 93,
        "country": "FR"
      },
      "home": {
        "id": "Rugby:bordeaux-begles",
        "name": "Bordeaux Bègles",
        "abbr": "UBB",
        "strength": 90,
        "country": "FR"
      },
      "competition": {
        "sport": "Rugby",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "FR"
        ],
        "code": "Top 14",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "kayo",
          "sky"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "FR"
      ],
      "keyPeople": {
        "label": "Projected playmakers",
        "isDemo": true,
        "source": "Invented names and assignments for this demo",
        "asOf": null,
        "players": [
          {
            "teamId": "Rugby:toulouse",
            "name": "Theo Laurent",
            "role": "Fly-half",
            "status": "projected",
            "quality": 81,
            "statLine": ""
          },
          {
            "teamId": "Rugby:bordeaux-begles",
            "name": "Finn Carter",
            "role": "Fly-half",
            "status": "projected",
            "quality": 86,
            "statLine": ""
          }
        ]
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "Two sides with different strengths. Watch who sets the tempo."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [],
      "eventType": "competitive"
    },
    {
      "id": "demo-47",
      "league": "URC",
      "sport": "Rugby",
      "participants": [
        {
          "id": "Rugby:leinster",
          "name": "Leinster",
          "abbr": "LEI",
          "strength": 94,
          "country": "IE"
        },
        {
          "id": "Rugby:munster",
          "name": "Munster",
          "abbr": "MUN",
          "strength": 88,
          "country": "IE"
        }
      ],
      "start": "2026-10-10T18:35:00Z",
      "duration": 120,
      "stage": "regular",
      "rivalry": true,
      "headline": "This one is personal",
      "status": "scheduled",
      "format": "Rugby union",
      "venueZone": "Europe/Dublin",
      "isDemo": true,
      "source": "Invented sample data",
      "beginner": "",
      "away": {
        "id": "Rugby:leinster",
        "name": "Leinster",
        "abbr": "LEI",
        "strength": 94,
        "country": "IE"
      },
      "home": {
        "id": "Rugby:munster",
        "name": "Munster",
        "abbr": "MUN",
        "strength": 88,
        "country": "IE"
      },
      "competition": {
        "sport": "Rugby",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "IE",
          "GB",
          "IT",
          "ZA"
        ],
        "code": "URC",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "kayo",
          "sky"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "IE",
        "GB",
        "IT",
        "ZA"
      ],
      "keyPeople": {
        "label": "Projected playmakers",
        "isDemo": true,
        "source": "Invented names and assignments for this demo",
        "asOf": null,
        "players": [
          {
            "teamId": "Rugby:leinster",
            "name": "Theo Laurent",
            "role": "Fly-half",
            "status": "projected",
            "quality": 81,
            "statLine": ""
          },
          {
            "teamId": "Rugby:munster",
            "name": "Finn Carter",
            "role": "Fly-half",
            "status": "projected",
            "quality": 86,
            "statLine": ""
          }
        ]
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "A familiar opponent, with a new chapter to write."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-48",
      "league": "NRL",
      "sport": "Rugby",
      "participants": [
        {
          "id": "Rugby:penrith-panthers",
          "name": "Penrith Panthers",
          "abbr": "PEN",
          "strength": 92,
          "country": "AU"
        },
        {
          "id": "Rugby:brisbane-broncos",
          "name": "Brisbane Broncos",
          "abbr": "BRI",
          "strength": 91,
          "country": "AU"
        }
      ],
      "start": "2026-10-11T08:30:00Z",
      "duration": 120,
      "stage": "final",
      "rivalry": false,
      "headline": "The trophy is in the building",
      "status": "scheduled",
      "format": "Rugby league",
      "venueZone": "Australia/Sydney",
      "isDemo": true,
      "source": "Invented sample data",
      "beginner": "",
      "away": {
        "id": "Rugby:penrith-panthers",
        "name": "Penrith Panthers",
        "abbr": "PEN",
        "strength": 92,
        "country": "AU"
      },
      "home": {
        "id": "Rugby:brisbane-broncos",
        "name": "Brisbane Broncos",
        "abbr": "BRI",
        "strength": 91,
        "country": "AU"
      },
      "noteworthy": {
        "score": 96,
        "reason": "Penrith Panthers. Brisbane Broncos. One final, one winner. No need to have followed every round—this is the one you show up for."
      },
      "competition": {
        "sport": "Rugby",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "AU",
          "NZ"
        ],
        "code": "NRL",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "kayo",
          "sky"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "AU",
        "NZ"
      ],
      "keyPeople": {
        "label": "Projected playmakers",
        "isDemo": true,
        "source": "Invented names and assignments for this demo",
        "asOf": null,
        "players": [
          {
            "teamId": "Rugby:penrith-panthers",
            "name": "Theo Laurent",
            "role": "Halfback",
            "status": "projected",
            "quality": 81,
            "statLine": ""
          },
          {
            "teamId": "Rugby:brisbane-broncos",
            "name": "Finn Carter",
            "role": "Halfback",
            "status": "projected",
            "quality": 86,
            "statLine": ""
          }
        ]
      },
      "promo": {
        "heading": "A title on the line.",
        "body": "Penrith Panthers. Brisbane Broncos. One final, one winner. No need to have followed every round—this is the one you show up for."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "championship",
          "detail": "The sample event is a title final.",
          "isDemo": true
        },
        {
          "id": "playoffs",
          "detail": "Part of the sample postseason.",
          "isDemo": true
        },
        {
          "id": "elimination",
          "detail": "The fictional final is winner-take-all.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-49",
      "league": "Formula 1",
      "sport": "Motorsport",
      "participants": [],
      "start": "2026-10-11T05:00:00Z",
      "duration": 120,
      "stage": "marquee",
      "rivalry": false,
      "headline": "Lights out. eyes up",
      "status": "scheduled",
      "format": "Grand Prix",
      "venueZone": "Asia/Tokyo",
      "isDemo": true,
      "source": "Invented sample data",
      "beginner": "Motorsport uses an event title and race duration rather than forcing a home-team/away-team structure.",
      "title": "Sample Japanese Grand Prix",
      "noteworthy": {
        "score": 92,
        "reason": "A full grid, one first corner, and a lot that can go wrong between the lights and the flag. Give the opening laps your full attention."
      },
      "competition": {
        "sport": "Motorsport",
        "scope": "global_tour",
        "tier": 1,
        "allowedException": false,
        "countries": [],
        "code": "F1",
        "coverage": "demo_only",
        "category": "open",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "sportsnavi"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "open"
        ]
      },
      "countries": [],
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "A full grid, one first corner, and a lot that can go wrong between the lights and the flag. Give the opening laps your full attention."
      },
      "watchOptions": [],
      "category": "open",
      "tagEvidence": [],
      "eventType": "competitive"
    },
    {
      "id": "demo-50",
      "league": "ATP",
      "sport": "Tennis",
      "participants": [
        {
          "id": "Tennis:carlos-alcaraz",
          "name": "Carlos Alcaraz",
          "abbr": "ALC",
          "strength": 94,
          "country": "ES"
        },
        {
          "id": "Tennis:jannik-sinner",
          "name": "Jannik Sinner",
          "abbr": "SIN",
          "strength": 94,
          "country": "IT"
        }
      ],
      "start": "2026-10-11T08:00:00Z",
      "duration": 180,
      "stage": "final",
      "rivalry": false,
      "headline": "The trophy is in the building",
      "status": "scheduled",
      "format": "Singles final",
      "venueZone": "Asia/Shanghai",
      "isDemo": true,
      "source": "Invented sample data",
      "beginner": "",
      "away": {
        "id": "Tennis:carlos-alcaraz",
        "name": "Carlos Alcaraz",
        "abbr": "ALC",
        "strength": 94,
        "country": "ES"
      },
      "home": {
        "id": "Tennis:jannik-sinner",
        "name": "Jannik Sinner",
        "abbr": "SIN",
        "strength": 94,
        "country": "IT"
      },
      "noteworthy": {
        "score": 94,
        "reason": "Carlos Alcaraz. Jannik Sinner. One final, one winner. No need to have followed every round—this is the one you show up for."
      },
      "competition": {
        "sport": "Tennis",
        "scope": "global_tour",
        "tier": 1,
        "allowedException": false,
        "countries": [],
        "code": "ATP",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "sportsnavi"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "men"
        ]
      },
      "countries": [],
      "promo": {
        "heading": "A title on the line.",
        "body": "Carlos Alcaraz. Jannik Sinner. One final, one winner. No need to have followed every round—this is the one you show up for."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "championship",
          "detail": "The sample event is a title final.",
          "isDemo": true
        },
        {
          "id": "ranked-opponents",
          "detail": "Fictional world No. 1 versus No. 2, not current rankings.",
          "isDemo": true,
          "rankingSystem": "Demo tour singles rankings",
          "cutoff": 10,
          "ranks": [
            1,
            2
          ]
        },
        {
          "id": "star-players",
          "detail": "Two marquee players in this sample draw.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-51",
      "league": "WTA",
      "sport": "Tennis",
      "participants": [
        {
          "id": "Tennis:aryna-sabalenka",
          "name": "Aryna Sabalenka",
          "abbr": "SAB",
          "strength": 94,
          "country": "BY"
        },
        {
          "id": "Tennis:iga-swiatek",
          "name": "Iga Świątek",
          "abbr": "SWI",
          "strength": 94,
          "country": "PL"
        }
      ],
      "start": "2026-10-10T08:00:00Z",
      "duration": 150,
      "stage": "final",
      "rivalry": false,
      "headline": "The trophy is in the building",
      "status": "scheduled",
      "format": "Singles final",
      "venueZone": "Asia/Shanghai",
      "isDemo": true,
      "source": "Invented sample data",
      "beginner": "",
      "away": {
        "id": "Tennis:aryna-sabalenka",
        "name": "Aryna Sabalenka",
        "abbr": "SAB",
        "strength": 94,
        "country": "BY"
      },
      "home": {
        "id": "Tennis:iga-swiatek",
        "name": "Iga Świątek",
        "abbr": "SWI",
        "strength": 94,
        "country": "PL"
      },
      "noteworthy": {
        "score": 94,
        "reason": "Aryna Sabalenka. Iga Świątek. One final, one winner. No need to have followed every round—this is the one you show up for."
      },
      "competition": {
        "sport": "Tennis",
        "scope": "global_tour",
        "tier": 1,
        "allowedException": false,
        "countries": [],
        "code": "WTA",
        "coverage": "demo_only",
        "category": "women",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "sportsnavi"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "women"
        ]
      },
      "countries": [],
      "promo": {
        "heading": "A title on the line.",
        "body": "Aryna Sabalenka. Iga Świątek. One final, one winner. No need to have followed every round—this is the one you show up for."
      },
      "watchOptions": [],
      "category": "women",
      "tagEvidence": [
        {
          "id": "championship",
          "detail": "The sample event is a title final.",
          "isDemo": true
        },
        {
          "id": "ranked-opponents",
          "detail": "Fictional world No. 1 versus No. 2, not current rankings.",
          "isDemo": true,
          "rankingSystem": "Demo tour singles rankings",
          "cutoff": 10,
          "ranks": [
            1,
            2
          ]
        },
        {
          "id": "star-players",
          "detail": "Two marquee players in this sample draw.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-extra-47",
      "league": "Championship",
      "sport": "Football",
      "participants": [
        {
          "id": "Football:coventry-city",
          "name": "Coventry City",
          "abbr": "COV",
          "strength": 80,
          "country": "GB"
        },
        {
          "id": "Football:middlesbrough",
          "name": "Middlesbrough",
          "abbr": "MID",
          "strength": 81,
          "country": "GB"
        }
      ],
      "start": "2026-10-10T11:30:00Z",
      "duration": 120,
      "stage": "regular",
      "rivalry": false,
      "headline": "One division down. volume all the way up",
      "status": "scheduled",
      "format": "Match",
      "venueZone": "Europe/London",
      "isDemo": true,
      "source": "Invented sample data",
      "away": {
        "id": "Football:coventry-city",
        "name": "Coventry City",
        "abbr": "COV",
        "strength": 80,
        "country": "GB"
      },
      "home": {
        "id": "Football:middlesbrough",
        "name": "Middlesbrough",
        "abbr": "MID",
        "strength": 81,
        "country": "GB"
      },
      "competition": {
        "sport": "Football",
        "scope": "domestic",
        "tier": 2,
        "allowedException": true,
        "countries": [
          "GB"
        ],
        "code": "EFL",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": true,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "GB"
      ],
      "keyPeople": {
        "label": "Team news",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Lineups and key absences not connected."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "Two sides with different strengths. Watch who sets the tempo."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [],
      "eventType": "competitive"
    },
    {
      "id": "demo-extra-48",
      "league": "WSL",
      "sport": "Football",
      "participants": [
        {
          "id": "Football:arsenal-women",
          "name": "Arsenal Women",
          "abbr": "ARS",
          "strength": 95,
          "country": "GB"
        },
        {
          "id": "Football:chelsea-women",
          "name": "Chelsea Women",
          "abbr": "CHE",
          "strength": 95,
          "country": "GB"
        }
      ],
      "start": "2026-10-11T11:00:00Z",
      "duration": 120,
      "stage": "marquee",
      "rivalry": true,
      "headline": "This one is personal",
      "status": "scheduled",
      "format": "Match",
      "venueZone": "Europe/London",
      "isDemo": true,
      "source": "Invented sample data",
      "away": {
        "id": "Football:arsenal-women",
        "name": "Arsenal Women",
        "abbr": "ARS",
        "strength": 95,
        "country": "GB"
      },
      "home": {
        "id": "Football:chelsea-women",
        "name": "Chelsea Women",
        "abbr": "CHE",
        "strength": 95,
        "country": "GB"
      },
      "competition": {
        "sport": "Football",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "GB"
        ],
        "code": "WSL",
        "coverage": "demo_only",
        "category": "women",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": true,
        "eventCategories": [
          "women"
        ]
      },
      "countries": [
        "GB"
      ],
      "keyPeople": {
        "label": "Team news",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Lineups and key absences not connected."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "A familiar opponent, with a new chapter to write."
      },
      "watchOptions": [],
      "category": "women",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-extra-49",
      "league": "NWSL",
      "sport": "Football",
      "participants": [
        {
          "id": "Football:bay-fc",
          "name": "Bay FC",
          "abbr": "BAY",
          "strength": 85,
          "country": "US"
        },
        {
          "id": "Football:portland-thorns",
          "name": "Portland Thorns",
          "abbr": "POR",
          "strength": 89,
          "country": "US"
        }
      ],
      "start": "2026-10-11T00:00:00Z",
      "duration": 120,
      "stage": "regular",
      "rivalry": false,
      "headline": "Here is your next good game",
      "status": "scheduled",
      "format": "Match",
      "venueZone": "America/Los_Angeles",
      "isDemo": true,
      "source": "Invented sample data",
      "away": {
        "id": "Football:bay-fc",
        "name": "Bay FC",
        "abbr": "BAY",
        "strength": 85,
        "country": "US"
      },
      "home": {
        "id": "Football:portland-thorns",
        "name": "Portland Thorns",
        "abbr": "POR",
        "strength": 89,
        "country": "US"
      },
      "competition": {
        "sport": "Football",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "US"
        ],
        "code": "NWSL",
        "coverage": "demo_only",
        "category": "women",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "women"
        ]
      },
      "countries": [
        "US"
      ],
      "keyPeople": {
        "label": "Team news",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Lineups and key absences not connected."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "Two sides with different strengths. Watch who sets the tempo."
      },
      "watchOptions": [],
      "category": "women",
      "tagEvidence": [],
      "eventType": "competitive"
    },
    {
      "id": "demo-extra-50",
      "league": "J1 League",
      "sport": "Football",
      "participants": [
        {
          "id": "Football:urawa-red-diamonds",
          "name": "Urawa Red Diamonds",
          "abbr": "URA",
          "strength": 86,
          "country": "JP"
        },
        {
          "id": "Football:kashima-antlers",
          "name": "Kashima Antlers",
          "abbr": "KAS",
          "strength": 88,
          "country": "JP"
        }
      ],
      "start": "2026-10-10T10:00:00Z",
      "duration": 120,
      "stage": "regular",
      "rivalry": false,
      "headline": "Here is your next good game",
      "status": "scheduled",
      "format": "Match",
      "venueZone": "Asia/Tokyo",
      "isDemo": true,
      "source": "Invented sample data",
      "away": {
        "id": "Football:urawa-red-diamonds",
        "name": "Urawa Red Diamonds",
        "abbr": "URA",
        "strength": 86,
        "country": "JP"
      },
      "home": {
        "id": "Football:kashima-antlers",
        "name": "Kashima Antlers",
        "abbr": "KAS",
        "strength": 88,
        "country": "JP"
      },
      "competition": {
        "sport": "Football",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "JP"
        ],
        "code": "JL",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "sportsnavi"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "JP"
      ],
      "keyPeople": {
        "label": "Team news",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Lineups and key absences not connected."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "Two sides with different strengths. Watch who sets the tempo."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [],
      "eventType": "competitive"
    },
    {
      "id": "demo-extra-51",
      "league": "A-League Men",
      "sport": "Football",
      "participants": [
        {
          "id": "Football:melbourne-victory",
          "name": "Melbourne Victory",
          "abbr": "MVC",
          "strength": 87,
          "country": "AU"
        },
        {
          "id": "Football:melbourne-city",
          "name": "Melbourne City",
          "abbr": "MCY",
          "strength": 87,
          "country": "AU"
        }
      ],
      "start": "2026-10-10T08:30:00Z",
      "duration": 120,
      "stage": "marquee",
      "rivalry": true,
      "headline": "This one is personal",
      "status": "scheduled",
      "format": "Match",
      "venueZone": "Australia/Melbourne",
      "isDemo": true,
      "source": "Invented sample data",
      "away": {
        "id": "Football:melbourne-victory",
        "name": "Melbourne Victory",
        "abbr": "MVC",
        "strength": 87,
        "country": "AU"
      },
      "home": {
        "id": "Football:melbourne-city",
        "name": "Melbourne City",
        "abbr": "MCY",
        "strength": 87,
        "country": "AU"
      },
      "competition": {
        "sport": "Football",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "AU",
          "NZ"
        ],
        "code": "AM",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "AU",
        "NZ"
      ],
      "keyPeople": {
        "label": "Team news",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Lineups and key absences not connected."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "A familiar opponent, with a new chapter to write."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-extra-52",
      "league": "UEFA Champions League",
      "sport": "Football",
      "participants": [
        {
          "id": "Football:real-madrid",
          "name": "Real Madrid",
          "abbr": "RMA",
          "strength": 96,
          "country": "ES"
        },
        {
          "id": "Football:bayern-munich",
          "name": "Bayern Munich",
          "abbr": "BAY",
          "strength": 94,
          "country": "DE"
        }
      ],
      "start": "2026-10-10T19:00:00Z",
      "duration": 120,
      "stage": "semifinal",
      "rivalry": false,
      "headline": "The final is calling",
      "status": "scheduled",
      "format": "Match",
      "venueZone": "Europe/London",
      "isDemo": true,
      "source": "Invented sample data",
      "away": {
        "id": "Football:real-madrid",
        "name": "Real Madrid",
        "abbr": "RMA",
        "strength": 96,
        "country": "ES"
      },
      "home": {
        "id": "Football:bayern-munich",
        "name": "Bayern Munich",
        "abbr": "BAY",
        "strength": 94,
        "country": "DE"
      },
      "noteworthy": {
        "score": 94,
        "reason": "Real Madrid and Bayern Munich are on the semifinal stage. A shot at the title is getting closer. Get this one on your screen."
      },
      "competition": {
        "sport": "Football",
        "scope": "international",
        "tier": 1,
        "allowedException": false,
        "countries": [],
        "code": "UCL",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "men"
        ]
      },
      "countries": [],
      "keyPeople": {
        "label": "Team news",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Lineups and key absences not connected."
      },
      "promo": {
        "heading": "One step from the final.",
        "body": "Real Madrid and Bayern Munich are on the semifinal stage. A shot at the title is getting closer. Get this one on your screen."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [],
      "eventType": "competitive"
    },
    {
      "id": "demo-extra-53",
      "league": "UEFA Europa League",
      "sport": "Football",
      "participants": [
        {
          "id": "Football:roma",
          "name": "Roma",
          "abbr": "ROM",
          "strength": 88,
          "country": "IT"
        },
        {
          "id": "Football:porto",
          "name": "Porto",
          "abbr": "POR",
          "strength": 87,
          "country": "PT"
        }
      ],
      "start": "2026-10-11T16:00:00Z",
      "duration": 120,
      "stage": "semifinal",
      "rivalry": false,
      "headline": "The final is calling",
      "status": "scheduled",
      "format": "Match",
      "venueZone": "Europe/London",
      "isDemo": true,
      "source": "Invented sample data",
      "away": {
        "id": "Football:roma",
        "name": "Roma",
        "abbr": "ROM",
        "strength": 88,
        "country": "IT"
      },
      "home": {
        "id": "Football:porto",
        "name": "Porto",
        "abbr": "POR",
        "strength": 87,
        "country": "PT"
      },
      "competition": {
        "sport": "Football",
        "scope": "international",
        "tier": 1,
        "allowedException": false,
        "countries": [],
        "code": "UEL",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "men"
        ]
      },
      "countries": [],
      "keyPeople": {
        "label": "Team news",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Lineups and key absences not connected."
      },
      "promo": {
        "heading": "One step from the final.",
        "body": "Two sides with different strengths. Watch who sets the tempo."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [],
      "eventType": "competitive"
    },
    {
      "id": "demo-extra-54",
      "league": "UEFA Conference League",
      "sport": "Football",
      "participants": [
        {
          "id": "Football:fiorentina",
          "name": "Fiorentina",
          "abbr": "FIO",
          "strength": 85,
          "country": "IT"
        },
        {
          "id": "Football:az-alkmaar",
          "name": "AZ Alkmaar",
          "abbr": "AZ",
          "strength": 83,
          "country": "NL"
        }
      ],
      "start": "2026-10-11T15:00:00Z",
      "duration": 120,
      "stage": "semifinal",
      "rivalry": false,
      "headline": "The final is calling",
      "status": "scheduled",
      "format": "Match",
      "venueZone": "Europe/Paris",
      "isDemo": true,
      "source": "Invented sample data",
      "away": {
        "id": "Football:fiorentina",
        "name": "Fiorentina",
        "abbr": "FIO",
        "strength": 85,
        "country": "IT"
      },
      "home": {
        "id": "Football:az-alkmaar",
        "name": "AZ Alkmaar",
        "abbr": "AZ",
        "strength": 83,
        "country": "NL"
      },
      "competition": {
        "sport": "Football",
        "scope": "international",
        "tier": 1,
        "allowedException": false,
        "countries": [],
        "code": "UECL",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "men"
        ]
      },
      "countries": [],
      "keyPeople": {
        "label": "Team news",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Lineups and key absences not connected."
      },
      "promo": {
        "heading": "One step from the final.",
        "body": "Two sides with different strengths. Watch who sets the tempo."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [],
      "eventType": "competitive"
    },
    {
      "id": "demo-extra-55",
      "league": "Copa Libertadores",
      "sport": "Football",
      "participants": [
        {
          "id": "Football:flamengo",
          "name": "Flamengo",
          "abbr": "FLA",
          "strength": 90,
          "country": "BR"
        },
        {
          "id": "Football:river-plate",
          "name": "River Plate",
          "abbr": "RIV",
          "strength": 90,
          "country": "AR"
        }
      ],
      "start": "2026-10-10T21:00:00Z",
      "duration": 120,
      "stage": "semifinal",
      "rivalry": false,
      "headline": "The final is calling",
      "status": "scheduled",
      "format": "Match",
      "venueZone": "America/Sao_Paulo",
      "isDemo": true,
      "source": "Invented sample data",
      "away": {
        "id": "Football:flamengo",
        "name": "Flamengo",
        "abbr": "FLA",
        "strength": 90,
        "country": "BR"
      },
      "home": {
        "id": "Football:river-plate",
        "name": "River Plate",
        "abbr": "RIV",
        "strength": 90,
        "country": "AR"
      },
      "noteworthy": {
        "score": 93,
        "reason": "Flamengo and River Plate are on the semifinal stage. A shot at the title is getting closer. Get this one on your screen."
      },
      "competition": {
        "sport": "Football",
        "scope": "international",
        "tier": 1,
        "allowedException": false,
        "countries": [],
        "code": "LIB",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "men"
        ]
      },
      "countries": [],
      "keyPeople": {
        "label": "Team news",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Lineups and key absences not connected."
      },
      "promo": {
        "heading": "One step from the final.",
        "body": "Flamengo and River Plate are on the semifinal stage. A shot at the title is getting closer. Get this one on your screen."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [],
      "eventType": "competitive"
    },
    {
      "id": "demo-extra-56",
      "league": "International football · men",
      "sport": "Football",
      "participants": [
        {
          "id": "Football:france",
          "name": "France",
          "abbr": "FRA",
          "strength": 95,
          "country": "FR"
        },
        {
          "id": "Football:brazil",
          "name": "Brazil",
          "abbr": "BRA",
          "strength": 94,
          "country": "BR"
        }
      ],
      "start": "2026-10-11T18:00:00Z",
      "duration": 120,
      "stage": "marquee",
      "rivalry": false,
      "headline": "Here is your next good game",
      "status": "scheduled",
      "format": "Match",
      "venueZone": "Europe/Paris",
      "isDemo": true,
      "source": "Invented sample data",
      "away": {
        "id": "Football:france",
        "name": "France",
        "abbr": "FRA",
        "strength": 95,
        "country": "FR"
      },
      "home": {
        "id": "Football:brazil",
        "name": "Brazil",
        "abbr": "BRA",
        "strength": 94,
        "country": "BR"
      },
      "noteworthy": {
        "score": 90,
        "reason": "France against Brazil. A matchup worth making room for. Turn it on, pick your side, and see who takes control."
      },
      "competition": {
        "sport": "Football",
        "scope": "international",
        "tier": 1,
        "allowedException": false,
        "countries": [],
        "code": "INT",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "men"
        ]
      },
      "countries": [],
      "keyPeople": {
        "label": "Team news",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Lineups and key absences not connected."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "France against Brazil. A matchup worth making room for. Turn it on, pick your side, and see who takes control."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [],
      "eventType": "competitive"
    },
    {
      "id": "demo-extra-57",
      "league": "International football · women",
      "sport": "Football",
      "participants": [
        {
          "id": "Football:england-women",
          "name": "England Women",
          "abbr": "ENG",
          "strength": 95,
          "country": "GB"
        },
        {
          "id": "Football:spain-women",
          "name": "Spain Women",
          "abbr": "ESP",
          "strength": 96,
          "country": "ES"
        }
      ],
      "start": "2026-10-10T15:00:00Z",
      "duration": 120,
      "stage": "final",
      "rivalry": false,
      "headline": "The trophy is in the building",
      "status": "scheduled",
      "format": "Match",
      "venueZone": "Europe/London",
      "isDemo": true,
      "source": "Invented sample data",
      "away": {
        "id": "Football:england-women",
        "name": "England Women",
        "abbr": "ENG",
        "strength": 95,
        "country": "GB"
      },
      "home": {
        "id": "Football:spain-women",
        "name": "Spain Women",
        "abbr": "ESP",
        "strength": 96,
        "country": "ES"
      },
      "noteworthy": {
        "score": 96,
        "reason": "England Women. Spain Women. One final, one winner. No need to have followed every round—this is the one you show up for."
      },
      "competition": {
        "sport": "Football",
        "scope": "international",
        "tier": 1,
        "allowedException": false,
        "countries": [],
        "code": "INT W",
        "coverage": "demo_only",
        "category": "women",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "women"
        ]
      },
      "countries": [],
      "keyPeople": {
        "label": "Team news",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Lineups and key absences not connected."
      },
      "promo": {
        "heading": "A title on the line.",
        "body": "England Women. Spain Women. One final, one winner. No need to have followed every round—this is the one you show up for."
      },
      "watchOptions": [],
      "category": "women",
      "tagEvidence": [
        {
          "id": "championship",
          "detail": "The sample event is a title final.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-extra-58",
      "league": "BBL",
      "sport": "Cricket",
      "participants": [
        {
          "id": "Cricket:sydney-sixers",
          "name": "Sydney Sixers",
          "abbr": "SIX",
          "strength": 90,
          "country": "AU"
        },
        {
          "id": "Cricket:perth-scorchers",
          "name": "Perth Scorchers",
          "abbr": "SCO",
          "strength": 91,
          "country": "AU"
        }
      ],
      "start": "2026-10-10T08:00:00Z",
      "duration": 240,
      "stage": "final",
      "rivalry": false,
      "headline": "The trophy is in the building",
      "status": "scheduled",
      "format": "T20",
      "venueZone": "Australia/Melbourne",
      "isDemo": true,
      "source": "Invented sample data",
      "away": {
        "id": "Cricket:sydney-sixers",
        "name": "Sydney Sixers",
        "abbr": "SIX",
        "strength": 90,
        "country": "AU"
      },
      "home": {
        "id": "Cricket:perth-scorchers",
        "name": "Perth Scorchers",
        "abbr": "SCO",
        "strength": 91,
        "country": "AU"
      },
      "noteworthy": {
        "score": 94,
        "reason": "Sydney Sixers. Perth Scorchers. One final, one winner. No need to have followed every round—this is the one you show up for."
      },
      "competition": {
        "sport": "Cricket",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "AU"
        ],
        "code": "BBL",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "espn",
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "AU"
      ],
      "keyPeople": {
        "label": "Playing XI & key matchups",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Playing XIs not available in this demo. Live version: confirmed XI, key batters/bowlers and late changes."
      },
      "promo": {
        "heading": "A title on the line.",
        "body": "Sydney Sixers. Perth Scorchers. One final, one winner. No need to have followed every round—this is the one you show up for."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "championship",
          "detail": "The sample event is a title final.",
          "isDemo": true
        },
        {
          "id": "playoffs",
          "detail": "Part of the sample postseason.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-extra-59",
      "league": "PSL",
      "sport": "Cricket",
      "participants": [
        {
          "id": "Cricket:lahore-qalandars",
          "name": "Lahore Qalandars",
          "abbr": "LAH",
          "strength": 90,
          "country": "PK"
        },
        {
          "id": "Cricket:karachi-kings",
          "name": "Karachi Kings",
          "abbr": "KAR",
          "strength": 88,
          "country": "PK"
        }
      ],
      "start": "2026-10-10T14:00:00Z",
      "duration": 240,
      "stage": "marquee",
      "rivalry": true,
      "headline": "This one is personal",
      "status": "scheduled",
      "format": "T20",
      "venueZone": "Asia/Karachi",
      "isDemo": true,
      "source": "Invented sample data",
      "away": {
        "id": "Cricket:lahore-qalandars",
        "name": "Lahore Qalandars",
        "abbr": "LAH",
        "strength": 90,
        "country": "PK"
      },
      "home": {
        "id": "Cricket:karachi-kings",
        "name": "Karachi Kings",
        "abbr": "KAR",
        "strength": 88,
        "country": "PK"
      },
      "competition": {
        "sport": "Cricket",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "PK"
        ],
        "code": "PSL",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "espn",
          "sky",
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "PK"
      ],
      "keyPeople": {
        "label": "Playing XI & key matchups",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Playing XIs not available in this demo. Live version: confirmed XI, key batters/bowlers and late changes."
      },
      "promo": {
        "heading": "A matchup worth a look.",
        "body": "A familiar opponent, with a new chapter to write."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-extra-60",
      "league": "SA20",
      "sport": "Cricket",
      "participants": [
        {
          "id": "Cricket:mi-cape-town",
          "name": "MI Cape Town",
          "abbr": "MICT",
          "strength": 90,
          "country": "ZA"
        },
        {
          "id": "Cricket:sunrisers-eastern-cape",
          "name": "Sunrisers Eastern Cape",
          "abbr": "SEC",
          "strength": 90,
          "country": "ZA"
        }
      ],
      "start": "2026-10-11T15:00:00Z",
      "duration": 240,
      "stage": "final",
      "rivalry": false,
      "headline": "The trophy is in the building",
      "status": "scheduled",
      "format": "T20",
      "venueZone": "Africa/Johannesburg",
      "isDemo": true,
      "source": "Invented sample data",
      "away": {
        "id": "Cricket:mi-cape-town",
        "name": "MI Cape Town",
        "abbr": "MICT",
        "strength": 90,
        "country": "ZA"
      },
      "home": {
        "id": "Cricket:sunrisers-eastern-cape",
        "name": "Sunrisers Eastern Cape",
        "abbr": "SEC",
        "strength": 90,
        "country": "ZA"
      },
      "noteworthy": {
        "score": 92,
        "reason": "MI Cape Town. Sunrisers Eastern Cape. One final, one winner. No need to have followed every round—this is the one you show up for."
      },
      "competition": {
        "sport": "Cricket",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "ZA"
        ],
        "code": "SA20",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "espn",
          "sky",
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "ZA"
      ],
      "keyPeople": {
        "label": "Playing XI & key matchups",
        "isDemo": true,
        "source": "No live lineup feed",
        "asOf": null,
        "players": [],
        "note": "Playing XIs not available in this demo. Live version: confirmed XI, key batters/bowlers and late changes."
      },
      "promo": {
        "heading": "A title on the line.",
        "body": "MI Cape Town. Sunrisers Eastern Cape. One final, one winner. No need to have followed every round—this is the one you show up for."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "championship",
          "detail": "The sample event is a title final.",
          "isDemo": true
        },
        {
          "id": "playoffs",
          "detail": "Part of the sample postseason.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-extra-61",
      "league": "MLB",
      "sport": "Baseball",
      "participants": [
        {
          "id": "Baseball:san-francisco-giants",
          "name": "San Francisco Giants",
          "abbr": "SF",
          "strength": 87,
          "country": "US"
        },
        {
          "id": "Baseball:los-angeles-dodgers",
          "name": "Los Angeles Dodgers",
          "abbr": "LAD",
          "strength": 94,
          "country": "US"
        }
      ],
      "start": "2026-10-10T23:15:00Z",
      "duration": 180,
      "stage": "postseason",
      "rivalry": true,
      "headline": "October. no easy outs",
      "status": "scheduled",
      "format": "Match",
      "venueZone": "America/Los_Angeles",
      "isDemo": true,
      "source": "Invented sample data",
      "away": {
        "id": "Baseball:san-francisco-giants",
        "name": "San Francisco Giants",
        "abbr": "SF",
        "strength": 87,
        "country": "US"
      },
      "home": {
        "id": "Baseball:los-angeles-dodgers",
        "name": "Los Angeles Dodgers",
        "abbr": "LAD",
        "strength": 94,
        "country": "US"
      },
      "competition": {
        "sport": "Baseball",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "US",
          "CA"
        ],
        "code": "MLB",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "espn",
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "men"
        ]
      },
      "countries": [
        "US",
        "CA"
      ],
      "keyPeople": {
        "label": "Probable pitchers",
        "isDemo": true,
        "source": "Invented names and assignments for this demo",
        "asOf": null,
        "players": [
          {
            "teamId": "Baseball:san-francisco-giants",
            "name": "Alex Mercer",
            "role": "RHP",
            "status": "probable",
            "quality": 81,
            "statLine": "2.84 ERA · 1.03 WHIP"
          },
          {
            "teamId": "Baseball:los-angeles-dodgers",
            "name": "Luis Vega",
            "role": "LHP",
            "status": "probable",
            "quality": 86,
            "statLine": "3.16 ERA · 1.09 WHIP"
          }
        ]
      },
      "promo": {
        "heading": "The postseason starts here.",
        "body": "A familiar opponent, with a new chapter to write."
      },
      "watchOptions": [],
      "category": "men",
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional showcase rivalry label.",
          "isDemo": true
        },
        {
          "id": "playoffs",
          "detail": "Part of the sample postseason.",
          "isDemo": true
        }
      ],
      "eventType": "competitive"
    },
    {
      "id": "demo-discovery-kbo",
      "league": "KBO",
      "sport": "Baseball",
      "competition": {
        "sport": "Baseball",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "KR"
        ],
        "code": "kbo",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "naver"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": false,
        "eventCategories": [
          "men"
        ]
      },
      "category": "men",
      "eventType": "competitive",
      "away": {
        "id": "demo-kbo-0",
        "name": "LG Twins",
        "strength": 86,
        "country": "KR"
      },
      "home": {
        "id": "demo-kbo-1",
        "name": "Samsung Lions",
        "strength": 89,
        "country": "KR"
      },
      "participants": [
        {
          "id": "demo-kbo-0",
          "name": "LG Twins",
          "strength": 86,
          "country": "KR"
        },
        {
          "id": "demo-kbo-1",
          "name": "Samsung Lions",
          "strength": 89,
          "country": "KR"
        }
      ],
      "start": "2026-10-10T05:00:00Z",
      "duration": 150,
      "stage": "postseason",
      "status": "scheduled",
      "rivalry": false,
      "format": "Sample event",
      "venueZone": "UTC",
      "countries": [
        "KR"
      ],
      "isDemo": true,
      "source": "Invented sample data; not a real scheduled event.",
      "watchOptions": [],
      "tagEvidence": [
        {
          "id": "playoffs",
          "detail": "Fictional event context for the discovery demo.",
          "isDemo": true
        },
        {
          "id": "elimination",
          "detail": "Fictional event context for the discovery demo.",
          "isDemo": true
        }
      ],
      "promo": {
        "heading": "One more game. No second chance.",
        "body": "LG Twins meets Samsung Lions in this fictional KBO showcase. A different competition, with a familiar reason to watch."
      },
      "noteworthy": {
        "score": 88,
        "reason": "Fictional notable event selected to demonstrate global discovery."
      }
    },
    {
      "id": "demo-discovery-nbb",
      "league": "NBB",
      "sport": "Basketball",
      "competition": {
        "sport": "Basketball",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "BR"
        ],
        "code": "nbb",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "men"
        ]
      },
      "category": "men",
      "eventType": "competitive",
      "away": {
        "id": "demo-nbb-0",
        "name": "Franca",
        "strength": 86,
        "country": "BR"
      },
      "home": {
        "id": "demo-nbb-1",
        "name": "Flamengo",
        "strength": 89,
        "country": "BR"
      },
      "participants": [
        {
          "id": "demo-nbb-0",
          "name": "Franca",
          "strength": 86,
          "country": "BR"
        },
        {
          "id": "demo-nbb-1",
          "name": "Flamengo",
          "strength": 89,
          "country": "BR"
        }
      ],
      "start": "2026-10-10T22:00:00Z",
      "duration": 120,
      "stage": "regular",
      "status": "scheduled",
      "rivalry": true,
      "format": "Sample event",
      "venueZone": "UTC",
      "countries": [
        "BR"
      ],
      "isDemo": true,
      "source": "Invented sample data; not a real scheduled event.",
      "watchOptions": [],
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional event context for the discovery demo.",
          "isDemo": true
        }
      ],
      "promo": {
        "heading": "Brazilian basketball, front and center.",
        "body": "Franca meets Flamengo in this fictional NBB showcase. A different competition, with a familiar reason to watch."
      },
      "noteworthy": {
        "score": 88,
        "reason": "Fictional notable event selected to demonstrate global discovery."
      }
    },
    {
      "id": "demo-discovery-sv-women",
      "league": "SV.League · women",
      "sport": "Volleyball",
      "competition": {
        "sport": "Volleyball",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "JP"
        ],
        "code": "sv-league-women",
        "coverage": "demo_only",
        "category": "women",
        "nature": "competitive",
        "sourceRefs": [
          "sportsnavi"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "women"
        ]
      },
      "category": "women",
      "eventType": "competitive",
      "away": {
        "id": "demo-sv-women-0",
        "name": "Osaka Marvelous",
        "strength": 86,
        "country": "JP"
      },
      "home": {
        "id": "demo-sv-women-1",
        "name": "NEC Red Rockets",
        "strength": 89,
        "country": "JP"
      },
      "participants": [
        {
          "id": "demo-sv-women-0",
          "name": "Osaka Marvelous",
          "strength": 86,
          "country": "JP"
        },
        {
          "id": "demo-sv-women-1",
          "name": "NEC Red Rockets",
          "strength": 89,
          "country": "JP"
        }
      ],
      "start": "2026-10-10T04:00:00Z",
      "duration": 120,
      "stage": "final",
      "status": "scheduled",
      "rivalry": false,
      "format": "Sample event",
      "venueZone": "UTC",
      "countries": [
        "JP"
      ],
      "isDemo": true,
      "source": "Invented sample data; not a real scheduled event.",
      "watchOptions": [],
      "tagEvidence": [
        {
          "id": "championship",
          "detail": "Fictional event context for the discovery demo.",
          "isDemo": true
        },
        {
          "id": "elimination",
          "detail": "Fictional event context for the discovery demo.",
          "isDemo": true
        }
      ],
      "promo": {
        "heading": "Something beyond your usual.",
        "body": "Osaka Marvelous meets NEC Red Rockets in this fictional SV.League · women showcase. A different competition, with a familiar reason to watch."
      },
      "noteworthy": {
        "score": 88,
        "reason": "Fictional notable event selected to demonstrate global discovery."
      }
    },
    {
      "id": "demo-discovery-superliga",
      "league": "Superliga · women",
      "sport": "Volleyball",
      "competition": {
        "sport": "Volleyball",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "BR"
        ],
        "code": "superliga-women",
        "coverage": "demo_only",
        "category": "women",
        "nature": "competitive",
        "sourceRefs": [
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "women"
        ]
      },
      "category": "women",
      "eventType": "competitive",
      "away": {
        "id": "demo-superliga-0",
        "name": "Praia Clube",
        "strength": 86,
        "country": "BR"
      },
      "home": {
        "id": "demo-superliga-1",
        "name": "Minas",
        "strength": 89,
        "country": "BR"
      },
      "participants": [
        {
          "id": "demo-superliga-0",
          "name": "Praia Clube",
          "strength": 86,
          "country": "BR"
        },
        {
          "id": "demo-superliga-1",
          "name": "Minas",
          "strength": 89,
          "country": "BR"
        }
      ],
      "start": "2026-10-11T14:00:00Z",
      "duration": 120,
      "stage": "final",
      "status": "scheduled",
      "rivalry": true,
      "format": "Sample event",
      "venueZone": "UTC",
      "countries": [
        "BR"
      ],
      "isDemo": true,
      "source": "Invented sample data; not a real scheduled event.",
      "watchOptions": [],
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional event context for the discovery demo.",
          "isDemo": true
        },
        {
          "id": "championship",
          "detail": "Fictional event context for the discovery demo.",
          "isDemo": true
        }
      ],
      "promo": {
        "heading": "Something beyond your usual.",
        "body": "Praia Clube meets Minas in this fictional Superliga · women showcase. A different competition, with a familiar reason to watch."
      },
      "noteworthy": {
        "score": 88,
        "reason": "Fictional notable event selected to demonstrate global discovery."
      }
    },
    {
      "id": "demo-discovery-nbl",
      "league": "NBL",
      "sport": "Basketball",
      "competition": {
        "sport": "Basketball",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "AU"
        ],
        "code": "nbl",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "men"
        ]
      },
      "category": "men",
      "eventType": "competitive",
      "away": {
        "id": "demo-nbl-0",
        "name": "Sydney Kings",
        "strength": 86,
        "country": "AU"
      },
      "home": {
        "id": "demo-nbl-1",
        "name": "Perth Wildcats",
        "strength": 89,
        "country": "AU"
      },
      "participants": [
        {
          "id": "demo-nbl-0",
          "name": "Sydney Kings",
          "strength": 86,
          "country": "AU"
        },
        {
          "id": "demo-nbl-1",
          "name": "Perth Wildcats",
          "strength": 89,
          "country": "AU"
        }
      ],
      "start": "2026-10-11T06:00:00Z",
      "duration": 120,
      "stage": "regular",
      "status": "scheduled",
      "rivalry": true,
      "format": "Sample event",
      "venueZone": "UTC",
      "countries": [
        "AU"
      ],
      "isDemo": true,
      "source": "Invented sample data; not a real scheduled event.",
      "watchOptions": [],
      "tagEvidence": [
        {
          "id": "rivalry",
          "detail": "Fictional event context for the discovery demo.",
          "isDemo": true
        }
      ],
      "promo": {
        "heading": "Something beyond your usual.",
        "body": "Sydney Kings meets Perth Wildcats in this fictional NBL showcase. A different competition, with a familiar reason to watch."
      },
      "noteworthy": {
        "score": 88,
        "reason": "Fictional notable event selected to demonstrate global discovery."
      }
    },
    {
      "id": "demo-discovery-ufc",
      "league": "UFC",
      "sport": "MMA",
      "competition": {
        "sport": "MMA",
        "scope": "global_tour",
        "tier": null,
        "allowedException": false,
        "countries": [],
        "code": "ufc",
        "coverage": "demo_only",
        "category": "open",
        "nature": "competitive",
        "sourceRefs": [
          "espn",
          "kayo",
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "men",
          "women",
          "open"
        ]
      },
      "category": "men",
      "eventType": "competitive",
      "away": {
        "id": "demo-ufc-0",
        "name": "Alex Stone (fictional)",
        "strength": 86,
        "country": ""
      },
      "home": {
        "id": "demo-ufc-1",
        "name": "Daniel Cruz (fictional)",
        "strength": 89,
        "country": ""
      },
      "participants": [
        {
          "id": "demo-ufc-0",
          "name": "Alex Stone (fictional)",
          "strength": 86,
          "country": ""
        },
        {
          "id": "demo-ufc-1",
          "name": "Daniel Cruz (fictional)",
          "strength": 89,
          "country": ""
        }
      ],
      "start": "2026-10-11T02:00:00Z",
      "duration": 150,
      "stage": "final",
      "status": "scheduled",
      "rivalry": false,
      "format": "Sample event",
      "venueZone": "UTC",
      "countries": [],
      "isDemo": true,
      "source": "Invented sample data; not a real scheduled event.",
      "watchOptions": [],
      "tagEvidence": [
        {
          "id": "championship",
          "detail": "Fictional event context for the discovery demo.",
          "isDemo": true
        },
        {
          "id": "ranked-opponents",
          "detail": "Fictional event context for the discovery demo.",
          "isDemo": true,
          "rankingSystem": "Demo division rankings",
          "cutoff": 10,
          "ranks": [
            2,
            4
          ]
        }
      ],
      "promo": {
        "heading": "Something beyond your usual.",
        "body": "Alex Stone (fictional) meets Daniel Cruz (fictional) in this fictional UFC showcase. A different competition, with a familiar reason to watch."
      },
      "noteworthy": {
        "score": 88,
        "reason": "Fictional notable event selected to demonstrate global discovery."
      }
    },
    {
      "id": "demo-discovery-ufc-women",
      "league": "UFC",
      "sport": "MMA",
      "competition": {
        "sport": "MMA",
        "scope": "global_tour",
        "tier": null,
        "allowedException": false,
        "countries": [],
        "code": "ufc",
        "coverage": "demo_only",
        "category": "open",
        "nature": "competitive",
        "sourceRefs": [
          "espn",
          "kayo",
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "men",
          "women",
          "open"
        ]
      },
      "category": "women",
      "eventType": "competitive",
      "away": {
        "id": "demo-ufc-women-0",
        "name": "Mia Carter (fictional)",
        "strength": 86,
        "country": ""
      },
      "home": {
        "id": "demo-ufc-women-1",
        "name": "Zoe Silva (fictional)",
        "strength": 89,
        "country": ""
      },
      "participants": [
        {
          "id": "demo-ufc-women-0",
          "name": "Mia Carter (fictional)",
          "strength": 86,
          "country": ""
        },
        {
          "id": "demo-ufc-women-1",
          "name": "Zoe Silva (fictional)",
          "strength": 89,
          "country": ""
        }
      ],
      "start": "2026-10-10T23:30:00Z",
      "duration": 150,
      "stage": "regular",
      "status": "scheduled",
      "rivalry": false,
      "format": "Sample event",
      "venueZone": "UTC",
      "countries": [],
      "isDemo": true,
      "source": "Invented sample data; not a real scheduled event.",
      "watchOptions": [],
      "tagEvidence": [
        {
          "id": "ranked-opponents",
          "detail": "Fictional event context for the discovery demo.",
          "isDemo": true,
          "rankingSystem": "Demo division rankings",
          "cutoff": 10,
          "ranks": [
            2,
            4
          ]
        }
      ],
      "promo": {
        "heading": "Something beyond your usual.",
        "body": "Mia Carter (fictional) meets Zoe Silva (fictional) in this fictional UFC showcase. A different competition, with a familiar reason to watch."
      },
      "noteworthy": {
        "score": 88,
        "reason": "Fictional notable event selected to demonstrate global discovery."
      }
    },
    {
      "id": "demo-discovery-boxing",
      "league": "Major boxing cards",
      "sport": "Boxing",
      "competition": {
        "sport": "Boxing",
        "scope": "global_tour",
        "tier": null,
        "allowedException": false,
        "countries": [],
        "code": "major-boxing-cards",
        "coverage": "demo_only",
        "category": "open",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "men",
          "women",
          "open"
        ]
      },
      "category": "men",
      "eventType": "competitive",
      "away": {
        "id": "demo-boxing-0",
        "name": "Sam Brooks (fictional)",
        "strength": 86,
        "country": ""
      },
      "home": {
        "id": "demo-boxing-1",
        "name": "Leo Ramos (fictional)",
        "strength": 89,
        "country": ""
      },
      "participants": [
        {
          "id": "demo-boxing-0",
          "name": "Sam Brooks (fictional)",
          "strength": 86,
          "country": ""
        },
        {
          "id": "demo-boxing-1",
          "name": "Leo Ramos (fictional)",
          "strength": 89,
          "country": ""
        }
      ],
      "start": "2026-10-10T20:00:00Z",
      "duration": 120,
      "stage": "final",
      "status": "scheduled",
      "rivalry": false,
      "format": "Sample event",
      "venueZone": "UTC",
      "countries": [],
      "isDemo": true,
      "source": "Invented sample data; not a real scheduled event.",
      "watchOptions": [],
      "tagEvidence": [
        {
          "id": "rematch",
          "detail": "Fictional event context for the discovery demo.",
          "isDemo": true
        },
        {
          "id": "championship",
          "detail": "Fictional event context for the discovery demo.",
          "isDemo": true
        }
      ],
      "promo": {
        "heading": "Something beyond your usual.",
        "body": "Sam Brooks (fictional) meets Leo Ramos (fictional) in this fictional Major boxing cards showcase. A different competition, with a familiar reason to watch."
      },
      "noteworthy": {
        "score": 88,
        "reason": "Fictional notable event selected to demonstrate global discovery."
      }
    },
    {
      "id": "demo-discovery-netball",
      "league": "Super Netball",
      "sport": "Netball",
      "competition": {
        "sport": "Netball",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "AU"
        ],
        "code": "super-netball",
        "coverage": "demo_only",
        "category": "women",
        "nature": "competitive",
        "sourceRefs": [
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "women"
        ]
      },
      "category": "women",
      "eventType": "competitive",
      "away": {
        "id": "demo-netball-0",
        "name": "West Coast Fever",
        "strength": 86,
        "country": "AU"
      },
      "home": {
        "id": "demo-netball-1",
        "name": "Melbourne Vixens",
        "strength": 89,
        "country": "AU"
      },
      "participants": [
        {
          "id": "demo-netball-0",
          "name": "West Coast Fever",
          "strength": 86,
          "country": "AU"
        },
        {
          "id": "demo-netball-1",
          "name": "Melbourne Vixens",
          "strength": 89,
          "country": "AU"
        }
      ],
      "start": "2026-10-10T07:00:00Z",
      "duration": 120,
      "stage": "final",
      "status": "scheduled",
      "rivalry": false,
      "format": "Sample event",
      "venueZone": "UTC",
      "countries": [
        "AU"
      ],
      "isDemo": true,
      "source": "Invented sample data; not a real scheduled event.",
      "watchOptions": [],
      "tagEvidence": [
        {
          "id": "championship",
          "detail": "Fictional event context for the discovery demo.",
          "isDemo": true
        },
        {
          "id": "elimination",
          "detail": "Fictional event context for the discovery demo.",
          "isDemo": true
        }
      ],
      "promo": {
        "heading": "Something beyond your usual.",
        "body": "West Coast Fever meets Melbourne Vixens in this fictional Super Netball showcase. A different competition, with a familiar reason to watch."
      },
      "noteworthy": {
        "score": 88,
        "reason": "Fictional notable event selected to demonstrate global discovery."
      }
    },
    {
      "id": "demo-discovery-darts",
      "league": "PDC premier events",
      "sport": "Darts",
      "competition": {
        "sport": "Darts",
        "scope": "global_tour",
        "tier": null,
        "allowedException": false,
        "countries": [],
        "code": "pdc-premier-events",
        "coverage": "demo_only",
        "category": "open",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "kayo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "eventCategories": [
          "men",
          "women",
          "open"
        ]
      },
      "category": "open",
      "eventType": "competitive",
      "away": {
        "id": "demo-darts-0",
        "name": "Player A (fictional)",
        "strength": 86,
        "country": ""
      },
      "home": {
        "id": "demo-darts-1",
        "name": "Player B (fictional)",
        "strength": 89,
        "country": ""
      },
      "participants": [
        {
          "id": "demo-darts-0",
          "name": "Player A (fictional)",
          "strength": 86,
          "country": ""
        },
        {
          "id": "demo-darts-1",
          "name": "Player B (fictional)",
          "strength": 89,
          "country": ""
        }
      ],
      "start": "2026-10-11T18:00:00Z",
      "duration": 120,
      "stage": "regular",
      "status": "scheduled",
      "rivalry": false,
      "format": "Sample event",
      "venueZone": "UTC",
      "countries": [],
      "isDemo": true,
      "source": "Invented sample data; not a real scheduled event.",
      "watchOptions": [],
      "tagEvidence": [
        {
          "id": "ranked-opponents",
          "detail": "Fictional event context for the discovery demo.",
          "isDemo": true,
          "rankingSystem": "Demo division rankings",
          "cutoff": 10,
          "ranks": [
            2,
            4
          ]
        }
      ],
      "promo": {
        "heading": "Something beyond your usual.",
        "body": "Player A (fictional) meets Player B (fictional) in this fictional PDC premier events showcase. A different competition, with a familiar reason to watch."
      },
      "noteworthy": {
        "score": 88,
        "reason": "Fictional notable event selected to demonstrate global discovery."
      }
    },
    {
      "id": "demo-relegation-men",
      "league": "Premier League",
      "sport": "Football",
      "competition": {
        "sport": "Football",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "GB"
        ],
        "code": "PL",
        "coverage": "demo_only",
        "category": "men",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": true,
        "eventCategories": [
          "men"
        ]
      },
      "category": "men",
      "eventType": "competitive",
      "participants": [
        {
          "id": "fictional-men-0",
          "name": "Northbridge FC",
          "strength": 70,
          "country": "GB"
        },
        {
          "id": "fictional-men-1",
          "name": "Riverside Athletic",
          "strength": 82,
          "country": "GB"
        }
      ],
      "away": {
        "id": "fictional-men-0",
        "name": "Northbridge FC",
        "strength": 70,
        "country": "GB"
      },
      "home": {
        "id": "fictional-men-1",
        "name": "Riverside Athletic",
        "strength": 82,
        "country": "GB"
      },
      "start": "2026-10-10T14:00:00Z",
      "duration": 120,
      "stage": "regular",
      "status": "scheduled",
      "rivalry": false,
      "format": "Survival scenario",
      "venueZone": "Europe/London",
      "countries": [
        "GB"
      ],
      "isDemo": true,
      "source": "Invented teams, fixture and standings for testing.",
      "tagEvidence": [
        {
          "id": "relegation-battle",
          "detail": "Fictional standings: three points from safety with four fixtures left. Not a claim about an actual season.",
          "isDemo": true,
          "relegationEnabled": true,
          "riskStatus": "at-risk",
          "riskTeamIds": [
            "fictional-men-0"
          ],
          "remainingFixtures": 4,
          "standingsAsOf": "2026-10-04T00:00:00Z"
        }
      ],
      "promo": {
        "heading": "Survival is the whole story.",
        "body": "Three points from safety. Four fixtures left. In this fictional scenario, staying up matters more than anything at the top of the table."
      },
      "noteworthy": {
        "score": 90,
        "reason": "An invented relegation fight demonstrating discovery beyond title contenders."
      },
      "watchOptions": []
    },
    {
      "id": "demo-relegation-women",
      "league": "WSL",
      "sport": "Football",
      "competition": {
        "sport": "Football",
        "scope": "domestic",
        "tier": 1,
        "allowedException": false,
        "countries": [
          "GB"
        ],
        "code": "WSL",
        "coverage": "demo_only",
        "category": "women",
        "nature": "competitive",
        "sourceRefs": [
          "sky",
          "espn",
          "globo"
        ],
        "auditStatus": "candidate",
        "feedStatus": "not_connected",
        "sourceRefsType": "research_leads",
        "relegation": true,
        "eventCategories": [
          "women"
        ]
      },
      "category": "women",
      "eventType": "competitive",
      "participants": [
        {
          "id": "fictional-women-0",
          "name": "Eastford Women",
          "strength": 70,
          "country": "GB"
        },
        {
          "id": "fictional-women-1",
          "name": "Harbour Town Women",
          "strength": 82,
          "country": "GB"
        }
      ],
      "away": {
        "id": "fictional-women-0",
        "name": "Eastford Women",
        "strength": 70,
        "country": "GB"
      },
      "home": {
        "id": "fictional-women-1",
        "name": "Harbour Town Women",
        "strength": 82,
        "country": "GB"
      },
      "start": "2026-10-11T13:00:00Z",
      "duration": 120,
      "stage": "regular",
      "status": "scheduled",
      "rivalry": false,
      "format": "Survival scenario",
      "venueZone": "Europe/London",
      "countries": [
        "GB"
      ],
      "isDemo": true,
      "source": "Invented teams, fixture and standings for testing.",
      "tagEvidence": [
        {
          "id": "relegation-battle",
          "detail": "Fictional standings: three points from safety with four fixtures left. Not a claim about an actual season.",
          "isDemo": true,
          "relegationEnabled": true,
          "riskStatus": "at-risk",
          "riskTeamIds": [
            "fictional-women-0",
            "fictional-women-1"
          ],
          "remainingFixtures": 4,
          "standingsAsOf": "2026-10-04T00:00:00Z"
        }
      ],
      "promo": {
        "heading": "Survival is the whole story.",
        "body": "Three points from safety. Four fixtures left. In this fictional scenario, staying up matters more than anything at the top of the table."
      },
      "noteworthy": {
        "score": 90,
        "reason": "An invented relegation fight demonstrating discovery beyond title contenders."
      },
      "watchOptions": []
    }
  ],
  "catalog": {
    "Premier League": {
      "sport": "Football",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "GB"
      ],
      "code": "PL",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "espn",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "relegation": true,
      "eventCategories": [
        "men"
      ]
    },
    "Championship": {
      "sport": "Football",
      "scope": "domestic",
      "tier": 2,
      "allowedException": true,
      "countries": [
        "GB"
      ],
      "code": "EFL",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "espn",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "relegation": true,
      "eventCategories": [
        "men"
      ]
    },
    "La Liga": {
      "sport": "Football",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "ES"
      ],
      "code": "LL",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "espn",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "relegation": true,
      "eventCategories": [
        "men"
      ]
    },
    "Bundesliga": {
      "sport": "Football",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "DE"
      ],
      "code": "B",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "espn",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "relegation": true,
      "eventCategories": [
        "men"
      ]
    },
    "Serie A": {
      "sport": "Football",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "IT"
      ],
      "code": "SA",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "espn",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "relegation": true,
      "eventCategories": [
        "men"
      ]
    },
    "Ligue 1": {
      "sport": "Football",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "FR"
      ],
      "code": "L1",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "espn",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "relegation": true,
      "eventCategories": [
        "men"
      ]
    },
    "MLS": {
      "sport": "Football",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "US",
        "CA"
      ],
      "code": "MLS",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "espn",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "relegation": false,
      "eventCategories": [
        "men"
      ]
    },
    "Liga MX": {
      "sport": "Football",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "MX"
      ],
      "code": "LM",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "espn",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "Brasileirão": {
      "sport": "Football",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "BR"
      ],
      "code": "B",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "espn",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "relegation": true,
      "eventCategories": [
        "men"
      ]
    },
    "UEFA Champions League": {
      "sport": "Football",
      "scope": "international",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "UCL",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "espn",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "WSL": {
      "sport": "Football",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "GB"
      ],
      "code": "WSL",
      "coverage": "demo_only",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "espn",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "relegation": true,
      "eventCategories": [
        "women"
      ]
    },
    "NWSL": {
      "sport": "Football",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "US"
      ],
      "code": "NWSL",
      "coverage": "demo_only",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "espn",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "J1 League": {
      "sport": "Football",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "JP"
      ],
      "code": "JL",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sportsnavi"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "A-League Men": {
      "sport": "Football",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "AU",
        "NZ"
      ],
      "code": "AM",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "espn",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "relegation": false,
      "eventCategories": [
        "men"
      ]
    },
    "UEFA Europa League": {
      "sport": "Football",
      "scope": "international",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "UEL",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "espn",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "UEFA Conference League": {
      "sport": "Football",
      "scope": "international",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "UECL",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "espn",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "Copa Libertadores": {
      "sport": "Football",
      "scope": "international",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "LIB",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "espn",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "International football · men": {
      "sport": "Football",
      "scope": "international",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "INT",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "espn",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "International football · women": {
      "sport": "Football",
      "scope": "international",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "INT W",
      "coverage": "demo_only",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "espn",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "IPL": {
      "sport": "Cricket",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "IN"
      ],
      "code": "IPL",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "espn",
        "sky",
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "relegation": false,
      "eventCategories": [
        "men"
      ]
    },
    "International cricket · men": {
      "sport": "Cricket",
      "scope": "international",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "INT",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "espn",
        "sky",
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "BBL": {
      "sport": "Cricket",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "AU"
      ],
      "code": "BBL",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "espn",
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "PSL": {
      "sport": "Cricket",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "PK"
      ],
      "code": "PSL",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "espn",
        "sky",
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "SA20": {
      "sport": "Cricket",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "ZA"
      ],
      "code": "SA20",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "espn",
        "sky",
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "AFL": {
      "sport": "Australian rules",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "AU"
      ],
      "code": "AFL",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "kayo",
        "sky"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "relegation": false,
      "eventCategories": [
        "men"
      ]
    },
    "AFLW": {
      "sport": "Australian rules",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "AU"
      ],
      "code": "AFLW",
      "coverage": "demo_only",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "kayo",
        "sky"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "relegation": false,
      "eventCategories": [
        "women"
      ]
    },
    "NFL": {
      "sport": "American football",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "US"
      ],
      "code": "NFL",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "espn",
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "relegation": false,
      "eventCategories": [
        "men"
      ]
    },
    "NBA": {
      "sport": "Basketball",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "US",
        "CA"
      ],
      "code": "NBA",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "espn",
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "relegation": false,
      "eventCategories": [
        "men"
      ]
    },
    "WNBA": {
      "sport": "Basketball",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "US",
        "CA"
      ],
      "code": "WNBA",
      "coverage": "demo_only",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "espn",
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "relegation": false,
      "eventCategories": [
        "women"
      ]
    },
    "EuroLeague": {
      "sport": "Basketball",
      "scope": "international",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "E",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "espn",
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "International rugby": {
      "sport": "Rugby",
      "scope": "international",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "INT",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "kayo",
        "sky"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "Top 14": {
      "sport": "Rugby",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "FR"
      ],
      "code": "Top 14",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "kayo",
        "sky"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "URC": {
      "sport": "Rugby",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "IE",
        "GB",
        "IT",
        "ZA"
      ],
      "code": "URC",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "kayo",
        "sky"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "NRL": {
      "sport": "Rugby",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "AU",
        "NZ"
      ],
      "code": "NRL",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "kayo",
        "sky"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "MLB": {
      "sport": "Baseball",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "US",
        "CA"
      ],
      "code": "MLB",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "espn",
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "relegation": false,
      "eventCategories": [
        "men"
      ]
    },
    "NPB": {
      "sport": "Baseball",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "JP"
      ],
      "code": "NPB",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sportsnavi"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "relegation": false,
      "eventCategories": [
        "men"
      ]
    },
    "NHL": {
      "sport": "Ice hockey",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "US",
        "CA"
      ],
      "code": "NHL",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "espn",
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "relegation": false,
      "eventCategories": [
        "men"
      ]
    },
    "Formula 1": {
      "sport": "Motorsport",
      "scope": "global_tour",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "F1",
      "coverage": "demo_only",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "espn",
        "sportsnavi"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "open"
      ]
    },
    "ATP": {
      "sport": "Tennis",
      "scope": "global_tour",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "ATP",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "espn",
        "sportsnavi"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "WTA": {
      "sport": "Tennis",
      "scope": "global_tour",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "WTA",
      "coverage": "demo_only",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "espn",
        "sportsnavi"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "Scottish Premiership": {
      "sport": "Football",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "GB"
      ],
      "code": "scottish-premiership",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "espn",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "relegation": true,
      "eventCategories": [
        "men"
      ]
    },
    "Primeira Liga": {
      "sport": "Football",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "PT"
      ],
      "code": "primeira-liga",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "espn",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "relegation": true,
      "eventCategories": [
        "men"
      ]
    },
    "Eredivisie": {
      "sport": "Football",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "NL"
      ],
      "code": "eredivisie",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "espn",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "relegation": true,
      "eventCategories": [
        "men"
      ]
    },
    "Argentine Primera División": {
      "sport": "Football",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "AR"
      ],
      "code": "argentine-primera-divisi-n",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "espn",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "K League 1": {
      "sport": "Football",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "KR"
      ],
      "code": "k-league-1",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "naver"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "relegation": true,
      "eventCategories": [
        "men"
      ]
    },
    "Saudi Pro League": {
      "sport": "Football",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "SA"
      ],
      "code": "saudi-pro-league",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "espn",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "A-League Women": {
      "sport": "Football",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "AU"
      ],
      "code": "a-league-women",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "globo",
        "espn"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "relegation": false,
      "eventCategories": [
        "women"
      ]
    },
    "WE League": {
      "sport": "Football",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "JP"
      ],
      "code": "we-league",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "sportsnavi"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "WK League": {
      "sport": "Football",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "KR"
      ],
      "code": "wk-league",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "naver"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "Liga F": {
      "sport": "Football",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "ES"
      ],
      "code": "liga-f",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "globo",
        "espn"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "relegation": true,
      "eventCategories": [
        "women"
      ]
    },
    "Frauen-Bundesliga": {
      "sport": "Football",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "DE"
      ],
      "code": "frauen-bundesliga",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "globo",
        "espn"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "relegation": true,
      "eventCategories": [
        "women"
      ]
    },
    "UEFA Women’s Champions League": {
      "sport": "Football",
      "scope": "international",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "uefa-women-s-champions-league",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "espn",
        "globo",
        "sportsnavi"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "Copa Libertadores Femenina": {
      "sport": "Football",
      "scope": "international",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "copa-libertadores-femenina",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "espn",
        "globo",
        "sportsnavi"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "Copa Sudamericana": {
      "sport": "Football",
      "scope": "international",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "copa-sudamericana",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "espn",
        "globo",
        "sportsnavi"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "AFC Champions League Elite": {
      "sport": "Football",
      "scope": "international",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "afc-champions-league-elite",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "espn",
        "globo",
        "sportsnavi"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "CONCACAF Champions Cup": {
      "sport": "Football",
      "scope": "international",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "concacaf-champions-cup",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "espn",
        "globo",
        "sportsnavi"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "The Hundred · men": {
      "sport": "Cricket",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "the-hundred-men",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "kayo",
        "sky",
        "espn"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "The Hundred · women": {
      "sport": "Cricket",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "the-hundred-women",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "kayo",
        "sky",
        "espn"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "Caribbean Premier League": {
      "sport": "Cricket",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "caribbean-premier-league",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "kayo",
        "sky",
        "espn"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "Women’s Caribbean Premier League": {
      "sport": "Cricket",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "women-s-caribbean-premier-league",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "kayo",
        "sky",
        "espn"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "Major League Cricket": {
      "sport": "Cricket",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "major-league-cricket",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "kayo",
        "sky",
        "espn"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "Bangladesh Premier League": {
      "sport": "Cricket",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "bangladesh-premier-league",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "kayo",
        "sky",
        "espn"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "ILT20": {
      "sport": "Cricket",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "ilt20",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "kayo",
        "sky",
        "espn"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "NBL": {
      "sport": "Basketball",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "AU"
      ],
      "code": "nbl",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "WNBL": {
      "sport": "Basketball",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "AU"
      ],
      "code": "wnbl",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "B.PREMIER": {
      "sport": "Basketball",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "JP"
      ],
      "code": "b-premier",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sportsnavi"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "W League · Japan": {
      "sport": "Basketball",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "JP"
      ],
      "code": "w-league-japan",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "sportsnavi"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "KBL": {
      "sport": "Basketball",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "KR"
      ],
      "code": "kbl",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "naver"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "WKBL": {
      "sport": "Basketball",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "KR"
      ],
      "code": "wkbl",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "naver"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "NBB": {
      "sport": "Basketball",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "BR"
      ],
      "code": "nbb",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "LBF": {
      "sport": "Basketball",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "BR"
      ],
      "code": "lbf",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "FIBA internationals · men": {
      "sport": "Basketball",
      "scope": "international",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "fiba-internationals-men",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "kayo",
        "globo",
        "espn"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "FIBA internationals · women": {
      "sport": "Basketball",
      "scope": "international",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "fiba-internationals-women",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "kayo",
        "globo",
        "espn"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "EuroLeague Women": {
      "sport": "Basketball",
      "scope": "international",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "euroleague-women",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "kayo",
        "globo",
        "espn"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "KBO": {
      "sport": "Baseball",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "KR"
      ],
      "code": "kbo",
      "coverage": "demo_only",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "naver"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "relegation": false,
      "eventCategories": [
        "men"
      ]
    },
    "World Baseball Classic": {
      "sport": "Baseball",
      "scope": "international",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "world-baseball-classic",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "espn",
        "sportsnavi",
        "naver"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "PWHL": {
      "sport": "Ice hockey",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "US",
        "CA"
      ],
      "code": "pwhl",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "espn"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "IIHF internationals · men": {
      "sport": "Ice hockey",
      "scope": "international",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "iihf-internationals-men",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "espn"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "IIHF internationals · women": {
      "sport": "Ice hockey",
      "scope": "international",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "iihf-internationals-women",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "espn"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "NRLW": {
      "sport": "Rugby",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "nrlw",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "Super League": {
      "sport": "Rugby",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "super-league",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sky"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "Women’s Super League · rugby league": {
      "sport": "Rugby",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "women-s-super-league-rugby-league",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "sky"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "Premiership Rugby": {
      "sport": "Rugby",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "premiership-rugby",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sky"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "Premiership Women’s Rugby": {
      "sport": "Rugby",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "premiership-women-s-rugby",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "sky"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "Super Rugby Pacific": {
      "sport": "Rugby",
      "scope": "international",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "super-rugby-pacific",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "Japan Rugby League One · Division 1": {
      "sport": "Rugby",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "japan-rugby-league-one-division-1",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sportsnavi"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "International rugby · women": {
      "sport": "Rugby",
      "scope": "international",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "international-rugby-women",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "SV.League · men": {
      "sport": "Volleyball",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "JP"
      ],
      "code": "sv-league-men",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sportsnavi"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "SV.League · women": {
      "sport": "Volleyball",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "JP"
      ],
      "code": "sv-league-women",
      "coverage": "demo_only",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "sportsnavi"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "V-League · men": {
      "sport": "Volleyball",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "KR"
      ],
      "code": "v-league-men",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "naver"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "V-League · women": {
      "sport": "Volleyball",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "KR"
      ],
      "code": "v-league-women",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "naver"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "Superliga · men": {
      "sport": "Volleyball",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "BR"
      ],
      "code": "superliga-men",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "Superliga · women": {
      "sport": "Volleyball",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "BR"
      ],
      "code": "superliga-women",
      "coverage": "demo_only",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "Volleyball internationals · men": {
      "sport": "Volleyball",
      "scope": "international",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "volleyball-internationals-men",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sportsnavi",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "Volleyball internationals · women": {
      "sport": "Volleyball",
      "scope": "international",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "volleyball-internationals-women",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "sportsnavi",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "Super Netball": {
      "sport": "Netball",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "AU"
      ],
      "code": "super-netball",
      "coverage": "demo_only",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "Netball Super League": {
      "sport": "Netball",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "GB"
      ],
      "code": "netball-super-league",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "sky"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "International netball": {
      "sport": "Netball",
      "scope": "international",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "international-netball",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "MotoGP": {
      "sport": "Motorsport",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "motogp",
      "coverage": "planned",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "kayo",
        "sky",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "open"
      ]
    },
    "IndyCar": {
      "sport": "Motorsport",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "indycar",
      "coverage": "planned",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "kayo",
        "sky",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "open"
      ]
    },
    "NASCAR Cup Series": {
      "sport": "Motorsport",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "nascar-cup-series",
      "coverage": "planned",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "kayo",
        "sky",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "open"
      ]
    },
    "Supercars": {
      "sport": "Motorsport",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "supercars",
      "coverage": "planned",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "kayo",
        "sky",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "open"
      ]
    },
    "Formula E": {
      "sport": "Motorsport",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "formula-e",
      "coverage": "planned",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "kayo",
        "sky",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "open"
      ]
    },
    "World Rally Championship": {
      "sport": "Motorsport",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "world-rally-championship",
      "coverage": "planned",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "kayo",
        "sky",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "open"
      ]
    },
    "World Endurance Championship": {
      "sport": "Motorsport",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "world-endurance-championship",
      "coverage": "planned",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "kayo",
        "sky",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "open"
      ]
    },
    "PGA Tour": {
      "sport": "Golf",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "pga-tour",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "DP World Tour": {
      "sport": "Golf",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "dp-world-tour",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "LPGA Tour": {
      "sport": "Golf",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "lpga-tour",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "Ladies European Tour": {
      "sport": "Golf",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "ladies-european-tour",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "JLPGA Tour": {
      "sport": "Golf",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "jlpga-tour",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "sportsnavi"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "Japan Golf Tour": {
      "sport": "Golf",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "japan-golf-tour",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sportsnavi"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "KPGA Tour": {
      "sport": "Golf",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "kpga-tour",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "naver"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "KLPGA Tour": {
      "sport": "Golf",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "klpga-tour",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "naver"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "UFC": {
      "sport": "MMA",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "ufc",
      "coverage": "demo_only",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "espn",
        "kayo",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men",
        "women",
        "open"
      ]
    },
    "ONE Championship": {
      "sport": "MMA",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "one-championship",
      "coverage": "planned",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men",
        "women",
        "open"
      ]
    },
    "PFL": {
      "sport": "MMA",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "pfl",
      "coverage": "planned",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "espn"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men",
        "women",
        "open"
      ]
    },
    "Major boxing cards": {
      "sport": "Boxing",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "major-boxing-cards",
      "coverage": "demo_only",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men",
        "women",
        "open"
      ]
    },
    "PDC premier events": {
      "sport": "Darts",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "pdc-premier-events",
      "coverage": "demo_only",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men",
        "women",
        "open"
      ]
    },
    "World Surf League · men": {
      "sport": "Surfing",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "world-surf-league-men",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "globo",
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "World Surf League · women": {
      "sport": "Surfing",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "world-surf-league-women",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "globo",
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "Liga Nacional de Futsal": {
      "sport": "Futsal",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "liga-nacional-de-futsal",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "International futsal · men": {
      "sport": "Futsal",
      "scope": "international",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "international-futsal-men",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "International futsal · women": {
      "sport": "Futsal",
      "scope": "international",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "international-futsal-women",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "Grand Sumo · Makuuchi": {
      "sport": "Sumo",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "grand-sumo-makuuchi",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sportsnavi"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "WTT premier events": {
      "sport": "Table tennis",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "wtt-premier-events",
      "coverage": "planned",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "sportsnavi"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men",
        "women",
        "open"
      ]
    },
    "BWF World Tour": {
      "sport": "Badminton",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "bwf-world-tour",
      "coverage": "planned",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "sportsnavi"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men",
        "women",
        "open"
      ]
    },
    "Diamond League": {
      "sport": "Athletics",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "diamond-league",
      "coverage": "planned",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "globo",
        "sportsnavi"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men",
        "women",
        "open"
      ]
    },
    "World Athletics Championships": {
      "sport": "Athletics",
      "scope": "international",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "world-athletics-championships",
      "coverage": "planned",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "globo",
        "sportsnavi"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men",
        "women",
        "open"
      ]
    },
    "UCI WorldTour · men": {
      "sport": "Cycling",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "uci-worldtour-men",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "sky"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "UCI Women’s WorldTour": {
      "sport": "Cycling",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "uci-women-s-worldtour",
      "coverage": "planned",
      "category": "women",
      "nature": "competitive",
      "sourceRefs": [
        "sky"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "women"
      ]
    },
    "SailGP": {
      "sport": "Sailing",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "sailgp",
      "coverage": "planned",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "kayo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "open"
      ]
    },
    "Street League Skateboarding": {
      "sport": "Skateboarding",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "street-league-skateboarding",
      "coverage": "planned",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men",
        "women",
        "open"
      ]
    },
    "PLL": {
      "sport": "Lacrosse",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "pll",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "espn"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "NLL": {
      "sport": "Lacrosse",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [],
      "code": "nll",
      "coverage": "planned",
      "category": "men",
      "nature": "competitive",
      "sourceRefs": [
        "espn"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men"
      ]
    },
    "ISU figure skating": {
      "sport": "Winter sports",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "isu-figure-skating",
      "coverage": "planned",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "sportsnavi"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men",
        "women",
        "open"
      ]
    },
    "International curling": {
      "sport": "Winter sports",
      "scope": "international",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "international-curling",
      "coverage": "planned",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "sportsnavi"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men",
        "women",
        "open"
      ]
    },
    "World Aquatics Championships": {
      "sport": "Aquatics",
      "scope": "international",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "world-aquatics-championships",
      "coverage": "planned",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men",
        "women",
        "open"
      ]
    },
    "World Gymnastics Championships": {
      "sport": "Gymnastics",
      "scope": "international",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "world-gymnastics-championships",
      "coverage": "planned",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men",
        "women",
        "open"
      ]
    },
    "IJF World Tour": {
      "sport": "Judo",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "ijf-world-tour",
      "coverage": "planned",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men",
        "women",
        "open"
      ]
    },
    "UWW senior championships": {
      "sport": "Wrestling",
      "scope": "international",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "uww-senior-championships",
      "coverage": "planned",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men",
        "women",
        "open"
      ]
    },
    "Major Group / Grade 1 racing": {
      "sport": "Horse racing",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "major-group-grade-1-racing",
      "coverage": "planned",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "sky",
        "kayo",
        "sportsnavi"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "open"
      ]
    },
    "Olympic Games": {
      "sport": "Multi-sport",
      "scope": "international",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "olympic-games",
      "coverage": "planned",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "espn",
        "sky",
        "sportsnavi",
        "naver",
        "globo"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men",
        "women",
        "open"
      ]
    },
    "Paralympic Games": {
      "sport": "Multi-sport",
      "scope": "international",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "paralympic-games",
      "coverage": "planned",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "globo",
        "sky"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men",
        "women",
        "open"
      ]
    },
    "Asian Games": {
      "sport": "Multi-sport",
      "scope": "international",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "asian-games",
      "coverage": "planned",
      "category": "open",
      "nature": "competitive",
      "sourceRefs": [
        "sportsnavi",
        "naver"
      ],
      "auditStatus": "candidate",
      "feedStatus": "not_connected",
      "sourceRefsType": "research_leads",
      "eventCategories": [
        "men",
        "women",
        "open"
      ]
    },
    "WLL": {
      "sport": "Lacrosse",
      "scope": "domestic",
      "tier": 1,
      "allowedException": false,
      "countries": [
        "US"
      ],
      "code": "wll",
      "coverage": "planned",
      "category": "women",
      "eventCategories": [
        "women"
      ],
      "nature": "competitive",
      "sourceRefs": [
        "espn"
      ],
      "sourceRefsType": "research_leads",
      "auditStatus": "competition_observed",
      "feedStatus": "not_connected",
      "evidenceUrl": "https://espnpressroom.com/press-release/espn-to-deliver-every-2026-premier-lacrosse-league-and-womens-lacrosse-league-game-all-season-long/"
    },
    "League of Legends · premier competitions": {
      "sport": "Esports",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "league-of-legends-premier-competitions",
      "coverage": "planned",
      "category": "open",
      "eventCategories": [
        "men",
        "women",
        "open"
      ],
      "nature": "competitive",
      "sourceRefs": [
        "naver",
        "globo"
      ],
      "sourceRefsType": "research_leads",
      "auditStatus": "candidate",
      "feedStatus": "not_connected"
    },
    "Counter-Strike 2 · premier events": {
      "sport": "Esports",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "counter-strike-2-premier-events",
      "coverage": "planned",
      "category": "open",
      "eventCategories": [
        "men",
        "women",
        "open"
      ],
      "nature": "competitive",
      "sourceRefs": [
        "naver",
        "globo"
      ],
      "sourceRefsType": "research_leads",
      "auditStatus": "candidate",
      "feedStatus": "not_connected"
    },
    "VALORANT · premier competitions": {
      "sport": "Esports",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "valorant-premier-competitions",
      "coverage": "planned",
      "category": "open",
      "eventCategories": [
        "men",
        "women",
        "open"
      ],
      "nature": "competitive",
      "sourceRefs": [
        "naver",
        "globo"
      ],
      "sourceRefsType": "research_leads",
      "auditStatus": "candidate",
      "feedStatus": "not_connected"
    },
    "Dota 2 · premier events": {
      "sport": "Esports",
      "scope": "global_tour",
      "tier": null,
      "allowedException": false,
      "countries": [],
      "code": "dota-2-premier-events",
      "coverage": "planned",
      "category": "open",
      "eventCategories": [
        "men",
        "women",
        "open"
      ],
      "nature": "competitive",
      "sourceRefs": [
        "naver",
        "globo"
      ],
      "sourceRefsType": "research_leads",
      "auditStatus": "candidate",
      "feedStatus": "not_connected"
    }
  },
  "countries": [
    {
      "code": "AF",
      "name": "Afghanistan"
    },
    {
      "code": "AL",
      "name": "Albania"
    },
    {
      "code": "DZ",
      "name": "Algeria"
    },
    {
      "code": "AS",
      "name": "American Samoa"
    },
    {
      "code": "AD",
      "name": "Andorra"
    },
    {
      "code": "AO",
      "name": "Angola"
    },
    {
      "code": "AI",
      "name": "Anguilla"
    },
    {
      "code": "AQ",
      "name": "Antarctica"
    },
    {
      "code": "AG",
      "name": "Antigua and Barbuda"
    },
    {
      "code": "AR",
      "name": "Argentina"
    },
    {
      "code": "AM",
      "name": "Armenia"
    },
    {
      "code": "AW",
      "name": "Aruba"
    },
    {
      "code": "AU",
      "name": "Australia"
    },
    {
      "code": "AT",
      "name": "Austria"
    },
    {
      "code": "AZ",
      "name": "Azerbaijan"
    },
    {
      "code": "BS",
      "name": "Bahamas"
    },
    {
      "code": "BH",
      "name": "Bahrain"
    },
    {
      "code": "BD",
      "name": "Bangladesh"
    },
    {
      "code": "BB",
      "name": "Barbados"
    },
    {
      "code": "BY",
      "name": "Belarus"
    },
    {
      "code": "BE",
      "name": "Belgium"
    },
    {
      "code": "BZ",
      "name": "Belize"
    },
    {
      "code": "BJ",
      "name": "Benin"
    },
    {
      "code": "BM",
      "name": "Bermuda"
    },
    {
      "code": "BT",
      "name": "Bhutan"
    },
    {
      "code": "BO",
      "name": "Bolivia, Plurinational State of"
    },
    {
      "code": "BQ",
      "name": "Bonaire, Sint Eustatius and Saba"
    },
    {
      "code": "BA",
      "name": "Bosnia and Herzegovina"
    },
    {
      "code": "BW",
      "name": "Botswana"
    },
    {
      "code": "BV",
      "name": "Bouvet Island"
    },
    {
      "code": "BR",
      "name": "Brazil"
    },
    {
      "code": "IO",
      "name": "British Indian Ocean Territory"
    },
    {
      "code": "BN",
      "name": "Brunei Darussalam"
    },
    {
      "code": "BG",
      "name": "Bulgaria"
    },
    {
      "code": "BF",
      "name": "Burkina Faso"
    },
    {
      "code": "BI",
      "name": "Burundi"
    },
    {
      "code": "CV",
      "name": "Cabo Verde"
    },
    {
      "code": "KH",
      "name": "Cambodia"
    },
    {
      "code": "CM",
      "name": "Cameroon"
    },
    {
      "code": "CA",
      "name": "Canada"
    },
    {
      "code": "KY",
      "name": "Cayman Islands"
    },
    {
      "code": "CF",
      "name": "Central African Republic"
    },
    {
      "code": "TD",
      "name": "Chad"
    },
    {
      "code": "CL",
      "name": "Chile"
    },
    {
      "code": "CN",
      "name": "China"
    },
    {
      "code": "CX",
      "name": "Christmas Island"
    },
    {
      "code": "CC",
      "name": "Cocos (Keeling) Islands"
    },
    {
      "code": "CO",
      "name": "Colombia"
    },
    {
      "code": "KM",
      "name": "Comoros"
    },
    {
      "code": "CG",
      "name": "Congo"
    },
    {
      "code": "CD",
      "name": "Congo, The Democratic Republic of the"
    },
    {
      "code": "CK",
      "name": "Cook Islands"
    },
    {
      "code": "CR",
      "name": "Costa Rica"
    },
    {
      "code": "HR",
      "name": "Croatia"
    },
    {
      "code": "CU",
      "name": "Cuba"
    },
    {
      "code": "CW",
      "name": "Curaçao"
    },
    {
      "code": "CY",
      "name": "Cyprus"
    },
    {
      "code": "CZ",
      "name": "Czechia"
    },
    {
      "code": "CI",
      "name": "Côte d'Ivoire"
    },
    {
      "code": "DK",
      "name": "Denmark"
    },
    {
      "code": "DJ",
      "name": "Djibouti"
    },
    {
      "code": "DM",
      "name": "Dominica"
    },
    {
      "code": "DO",
      "name": "Dominican Republic"
    },
    {
      "code": "EC",
      "name": "Ecuador"
    },
    {
      "code": "EG",
      "name": "Egypt"
    },
    {
      "code": "SV",
      "name": "El Salvador"
    },
    {
      "code": "GQ",
      "name": "Equatorial Guinea"
    },
    {
      "code": "ER",
      "name": "Eritrea"
    },
    {
      "code": "EE",
      "name": "Estonia"
    },
    {
      "code": "SZ",
      "name": "Eswatini"
    },
    {
      "code": "ET",
      "name": "Ethiopia"
    },
    {
      "code": "FK",
      "name": "Falkland Islands (Malvinas)"
    },
    {
      "code": "FO",
      "name": "Faroe Islands"
    },
    {
      "code": "FJ",
      "name": "Fiji"
    },
    {
      "code": "FI",
      "name": "Finland"
    },
    {
      "code": "FR",
      "name": "France"
    },
    {
      "code": "GF",
      "name": "French Guiana"
    },
    {
      "code": "PF",
      "name": "French Polynesia"
    },
    {
      "code": "TF",
      "name": "French Southern Territories"
    },
    {
      "code": "GA",
      "name": "Gabon"
    },
    {
      "code": "GM",
      "name": "Gambia"
    },
    {
      "code": "GE",
      "name": "Georgia"
    },
    {
      "code": "DE",
      "name": "Germany"
    },
    {
      "code": "GH",
      "name": "Ghana"
    },
    {
      "code": "GI",
      "name": "Gibraltar"
    },
    {
      "code": "GR",
      "name": "Greece"
    },
    {
      "code": "GL",
      "name": "Greenland"
    },
    {
      "code": "GD",
      "name": "Grenada"
    },
    {
      "code": "GP",
      "name": "Guadeloupe"
    },
    {
      "code": "GU",
      "name": "Guam"
    },
    {
      "code": "GT",
      "name": "Guatemala"
    },
    {
      "code": "GG",
      "name": "Guernsey"
    },
    {
      "code": "GN",
      "name": "Guinea"
    },
    {
      "code": "GW",
      "name": "Guinea-Bissau"
    },
    {
      "code": "GY",
      "name": "Guyana"
    },
    {
      "code": "HT",
      "name": "Haiti"
    },
    {
      "code": "HM",
      "name": "Heard Island and McDonald Islands"
    },
    {
      "code": "VA",
      "name": "Holy See (Vatican City State)"
    },
    {
      "code": "HN",
      "name": "Honduras"
    },
    {
      "code": "HK",
      "name": "Hong Kong"
    },
    {
      "code": "HU",
      "name": "Hungary"
    },
    {
      "code": "IS",
      "name": "Iceland"
    },
    {
      "code": "IN",
      "name": "India"
    },
    {
      "code": "ID",
      "name": "Indonesia"
    },
    {
      "code": "IR",
      "name": "Iran, Islamic Republic of"
    },
    {
      "code": "IQ",
      "name": "Iraq"
    },
    {
      "code": "IE",
      "name": "Ireland"
    },
    {
      "code": "IM",
      "name": "Isle of Man"
    },
    {
      "code": "IL",
      "name": "Israel"
    },
    {
      "code": "IT",
      "name": "Italy"
    },
    {
      "code": "JM",
      "name": "Jamaica"
    },
    {
      "code": "JP",
      "name": "Japan"
    },
    {
      "code": "JE",
      "name": "Jersey"
    },
    {
      "code": "JO",
      "name": "Jordan"
    },
    {
      "code": "KZ",
      "name": "Kazakhstan"
    },
    {
      "code": "KE",
      "name": "Kenya"
    },
    {
      "code": "KI",
      "name": "Kiribati"
    },
    {
      "code": "KP",
      "name": "Korea, Democratic People's Republic of"
    },
    {
      "code": "KR",
      "name": "Korea, Republic of"
    },
    {
      "code": "KW",
      "name": "Kuwait"
    },
    {
      "code": "KG",
      "name": "Kyrgyzstan"
    },
    {
      "code": "LA",
      "name": "Lao People's Democratic Republic"
    },
    {
      "code": "LV",
      "name": "Latvia"
    },
    {
      "code": "LB",
      "name": "Lebanon"
    },
    {
      "code": "LS",
      "name": "Lesotho"
    },
    {
      "code": "LR",
      "name": "Liberia"
    },
    {
      "code": "LY",
      "name": "Libya"
    },
    {
      "code": "LI",
      "name": "Liechtenstein"
    },
    {
      "code": "LT",
      "name": "Lithuania"
    },
    {
      "code": "LU",
      "name": "Luxembourg"
    },
    {
      "code": "MO",
      "name": "Macao"
    },
    {
      "code": "MG",
      "name": "Madagascar"
    },
    {
      "code": "MW",
      "name": "Malawi"
    },
    {
      "code": "MY",
      "name": "Malaysia"
    },
    {
      "code": "MV",
      "name": "Maldives"
    },
    {
      "code": "ML",
      "name": "Mali"
    },
    {
      "code": "MT",
      "name": "Malta"
    },
    {
      "code": "MH",
      "name": "Marshall Islands"
    },
    {
      "code": "MQ",
      "name": "Martinique"
    },
    {
      "code": "MR",
      "name": "Mauritania"
    },
    {
      "code": "MU",
      "name": "Mauritius"
    },
    {
      "code": "YT",
      "name": "Mayotte"
    },
    {
      "code": "MX",
      "name": "Mexico"
    },
    {
      "code": "FM",
      "name": "Micronesia, Federated States of"
    },
    {
      "code": "MD",
      "name": "Moldova, Republic of"
    },
    {
      "code": "MC",
      "name": "Monaco"
    },
    {
      "code": "MN",
      "name": "Mongolia"
    },
    {
      "code": "ME",
      "name": "Montenegro"
    },
    {
      "code": "MS",
      "name": "Montserrat"
    },
    {
      "code": "MA",
      "name": "Morocco"
    },
    {
      "code": "MZ",
      "name": "Mozambique"
    },
    {
      "code": "MM",
      "name": "Myanmar"
    },
    {
      "code": "NA",
      "name": "Namibia"
    },
    {
      "code": "NR",
      "name": "Nauru"
    },
    {
      "code": "NP",
      "name": "Nepal"
    },
    {
      "code": "NL",
      "name": "Netherlands"
    },
    {
      "code": "NC",
      "name": "New Caledonia"
    },
    {
      "code": "NZ",
      "name": "New Zealand"
    },
    {
      "code": "NI",
      "name": "Nicaragua"
    },
    {
      "code": "NE",
      "name": "Niger"
    },
    {
      "code": "NG",
      "name": "Nigeria"
    },
    {
      "code": "NU",
      "name": "Niue"
    },
    {
      "code": "NF",
      "name": "Norfolk Island"
    },
    {
      "code": "MK",
      "name": "North Macedonia"
    },
    {
      "code": "MP",
      "name": "Northern Mariana Islands"
    },
    {
      "code": "NO",
      "name": "Norway"
    },
    {
      "code": "OM",
      "name": "Oman"
    },
    {
      "code": "PK",
      "name": "Pakistan"
    },
    {
      "code": "PW",
      "name": "Palau"
    },
    {
      "code": "PS",
      "name": "Palestine, State of"
    },
    {
      "code": "PA",
      "name": "Panama"
    },
    {
      "code": "PG",
      "name": "Papua New Guinea"
    },
    {
      "code": "PY",
      "name": "Paraguay"
    },
    {
      "code": "PE",
      "name": "Peru"
    },
    {
      "code": "PH",
      "name": "Philippines"
    },
    {
      "code": "PN",
      "name": "Pitcairn"
    },
    {
      "code": "PL",
      "name": "Poland"
    },
    {
      "code": "PT",
      "name": "Portugal"
    },
    {
      "code": "PR",
      "name": "Puerto Rico"
    },
    {
      "code": "QA",
      "name": "Qatar"
    },
    {
      "code": "RO",
      "name": "Romania"
    },
    {
      "code": "RU",
      "name": "Russian Federation"
    },
    {
      "code": "RW",
      "name": "Rwanda"
    },
    {
      "code": "RE",
      "name": "Réunion"
    },
    {
      "code": "BL",
      "name": "Saint Barthélemy"
    },
    {
      "code": "SH",
      "name": "Saint Helena, Ascension and Tristan da Cunha"
    },
    {
      "code": "KN",
      "name": "Saint Kitts and Nevis"
    },
    {
      "code": "LC",
      "name": "Saint Lucia"
    },
    {
      "code": "MF",
      "name": "Saint Martin (French part)"
    },
    {
      "code": "PM",
      "name": "Saint Pierre and Miquelon"
    },
    {
      "code": "VC",
      "name": "Saint Vincent and the Grenadines"
    },
    {
      "code": "WS",
      "name": "Samoa"
    },
    {
      "code": "SM",
      "name": "San Marino"
    },
    {
      "code": "ST",
      "name": "Sao Tome and Principe"
    },
    {
      "code": "SA",
      "name": "Saudi Arabia"
    },
    {
      "code": "SN",
      "name": "Senegal"
    },
    {
      "code": "RS",
      "name": "Serbia"
    },
    {
      "code": "SC",
      "name": "Seychelles"
    },
    {
      "code": "SL",
      "name": "Sierra Leone"
    },
    {
      "code": "SG",
      "name": "Singapore"
    },
    {
      "code": "SX",
      "name": "Sint Maarten (Dutch part)"
    },
    {
      "code": "SK",
      "name": "Slovakia"
    },
    {
      "code": "SI",
      "name": "Slovenia"
    },
    {
      "code": "SB",
      "name": "Solomon Islands"
    },
    {
      "code": "SO",
      "name": "Somalia"
    },
    {
      "code": "ZA",
      "name": "South Africa"
    },
    {
      "code": "GS",
      "name": "South Georgia and the South Sandwich Islands"
    },
    {
      "code": "SS",
      "name": "South Sudan"
    },
    {
      "code": "ES",
      "name": "Spain"
    },
    {
      "code": "LK",
      "name": "Sri Lanka"
    },
    {
      "code": "SD",
      "name": "Sudan"
    },
    {
      "code": "SR",
      "name": "Suriname"
    },
    {
      "code": "SJ",
      "name": "Svalbard and Jan Mayen"
    },
    {
      "code": "SE",
      "name": "Sweden"
    },
    {
      "code": "CH",
      "name": "Switzerland"
    },
    {
      "code": "SY",
      "name": "Syrian Arab Republic"
    },
    {
      "code": "TW",
      "name": "Taiwan, Province of China"
    },
    {
      "code": "TJ",
      "name": "Tajikistan"
    },
    {
      "code": "TZ",
      "name": "Tanzania, United Republic of"
    },
    {
      "code": "TH",
      "name": "Thailand"
    },
    {
      "code": "TL",
      "name": "Timor-Leste"
    },
    {
      "code": "TG",
      "name": "Togo"
    },
    {
      "code": "TK",
      "name": "Tokelau"
    },
    {
      "code": "TO",
      "name": "Tonga"
    },
    {
      "code": "TT",
      "name": "Trinidad and Tobago"
    },
    {
      "code": "TN",
      "name": "Tunisia"
    },
    {
      "code": "TM",
      "name": "Turkmenistan"
    },
    {
      "code": "TC",
      "name": "Turks and Caicos Islands"
    },
    {
      "code": "TV",
      "name": "Tuvalu"
    },
    {
      "code": "TR",
      "name": "Türkiye"
    },
    {
      "code": "UG",
      "name": "Uganda"
    },
    {
      "code": "UA",
      "name": "Ukraine"
    },
    {
      "code": "AE",
      "name": "United Arab Emirates"
    },
    {
      "code": "GB",
      "name": "United Kingdom"
    },
    {
      "code": "US",
      "name": "United States"
    },
    {
      "code": "UM",
      "name": "United States Minor Outlying Islands"
    },
    {
      "code": "UY",
      "name": "Uruguay"
    },
    {
      "code": "UZ",
      "name": "Uzbekistan"
    },
    {
      "code": "VU",
      "name": "Vanuatu"
    },
    {
      "code": "VE",
      "name": "Venezuela, Bolivarian Republic of"
    },
    {
      "code": "VN",
      "name": "Viet Nam"
    },
    {
      "code": "VG",
      "name": "Virgin Islands, British"
    },
    {
      "code": "VI",
      "name": "Virgin Islands, U.S."
    },
    {
      "code": "WF",
      "name": "Wallis and Futuna"
    },
    {
      "code": "EH",
      "name": "Western Sahara"
    },
    {
      "code": "YE",
      "name": "Yemen"
    },
    {
      "code": "ZM",
      "name": "Zambia"
    },
    {
      "code": "ZW",
      "name": "Zimbabwe"
    },
    {
      "code": "AX",
      "name": "Åland Islands"
    }
  ],
  "coverageSources": {
    "espn": {
      "name": "ESPN",
      "url": "https://www.espn.com/espn/sitemap",
      "audit": "Sitemap search index inspected; direct page blocked. Individual lacrosse coverage observed. Full competition inventory pending.",
      "evidenceUrl": "https://espnpressroom.com/press-release/espn-to-deliver-every-2026-premier-lacrosse-league-and-womens-lacrosse-league-game-all-season-long/"
    },
    "sky": {
      "name": "Sky Sports",
      "url": "https://www.skysports.com/",
      "audit": "Sport and competition sections observed; not an exhaustive schedule inventory."
    },
    "kayo": {
      "name": "Kayo Sports",
      "url": "https://kayosports.com.au/en-AU/help/articles/31174073747357-what-content-is-available-as-part-of-my-kayo-subscription",
      "audit": "Content guide inspected. Seasonal lists and rights are not US availability."
    },
    "sportsnavi": {
      "name": "SportsNavi",
      "url": "https://sports.yahoo.co.jp/",
      "audit": "Sport navigation inspected; B.PREMIER and volleyball pages inspected."
    },
    "naver": {
      "name": "Naver Sports",
      "url": "https://sports.naver.com/",
      "audit": "Naver Sports and community routes returned no readable schedule content. Candidate Korean leagues await competition-level verification; no full audit claimed.",
      "evidenceUrl": "https://talks.naver.com/sports"
    },
    "globo": {
      "name": "Globo Esporte / ge",
      "url": "https://ge.globo.com/agenda/",
      "audit": "Sport and competition navigation inspected. Some esports pages are historical; season-active status remains pending.",
      "evidenceUrl": "https://ge.globo.com/esports/cs/"
    }
  },
  "coverageReviewedAt": "2026-10-04",
  "coverageComplete": false,
  "coverageNote": "Initial competition roadmap using six publisher coverage references. Not an exhaustive inventory, licensed data feed, or assertion of broadcast rights. A source association is a research lead until verified per competition.",
  "scopeRules": {
    "topTierDomestic": true,
    "domesticException": "Championship",
    "seniorInternational": true,
    "scriptedEntertainment": false,
    "teamFollowing": false,
    "watchMarket": "US"
  }
};
if(typeof module === 'object' && module.exports) module.exports=data; else root.WatchData=data;
})(typeof globalThis !== 'undefined' ? globalThis : this);
