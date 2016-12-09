/*!
    Copyright (C) 2016 Google Inc.
    Licensed under http://www.apache.org/licenses/LICENSE- 0 <see LICENSE file>
*/

(function (GGRC, _) {
  var FIRST_NAMES = 'James Christopher Ronald Mary Lisa Michelle John Daniel Anthony Patricia Nancy Laura Robert Paul Kevin Linda Karen Sarah Michael Mark Jason Barbara Betty Kimberly William Donald Jeff Elizabeth Helen Deborah David George Jennifer Sandra Richard Kenneth Maria Donna Charles Steven Susan Carol Joseph Edward Margaret Ruth Thomas Brian Dorothy Sharon'.split(' ');
  var LAST_NAMES = 'Smith Anderson Clark Wright Mitchell Johnson Thomas Rodriguez Lopez Perez Williams Jackson Lewis Hill Roberts Jones White Lee Scott Turner Brown Harris Walker Green Phillips Davis Martin Hall Adams Campbell Miller Thompson Allen Baker Parker Wilson Garcia Young Gonzalez Evans Moore Martinez Hernandez Nelson Edwards Taylor Robinson King Carter Collins'.split(' ');
  var WORDS = 'all undertaken by government market network over family tribe formal informal organization territory through laws norms power language relates processes interaction decision-making among actors involved collective problem that lead creation reinforcement reproduction social norms institutions distinguish term governance from government government formal body invested with authority make decisions given political system this case governance process which includes all actors involved influencing decision-making process such as lobbies parties medias centered on relevant governing body whether organization geopolitical entity nation-state corporation business organization incorporated as legal entity socio-political entity chiefdom tribe family etc an informal one its governance way rules norms actions are produced sustained regulated held accountable degree formality depends on internal rules given organization absence actors administer affecting aimed already also among analyzed analytical any apply applying approaches are article articulated as associated assure at authority authors banks based be becht beginning being best between board boards bolton both business by called can century citizens clear coherent collective community complex concept connections consists contrast control corporate corporation corporation creating customers customs deals decisions defined denote describe describes differences direct directioncorporate directors documented edit eells empirical employees environment environmental equals especially established example exercise exist explicit fiduciary finance first five focus focuses for form formal found framework free from functioning gaf generate global goal goals governance governancecorporate governanceglobal governanceinformation governanceinternet governanceit governance government group has have however in include includes independent industry informal information institutions inter- interact interchangeable interdependent interests international internet investigating investment involved is issues it itself james large laws lenders like logically main make management manner many markets meaning mechanisms mediated methodology mission mitigate need needs nodal non-governmental non-normative non-profit norms obligations observed of often older on or organization organizations other over overarching people perspective pg plane players points policies policy political polity postulated practical primarily principal problems processes project projects proposes public regarding regular regulation regulators reinforcing relations relationship relationships research respect responsibility richard right risks rules sector serves set shareholders social society some sometimes stakeholders states structure successful suppliers system technology term terms textbooks their these those through thus tool traditional trust trustees understood units unlike up use used value various was way where wherever which whom with word'.split(' ');
  var SITES = [{
    title: 'AdMob',
    domain: 'admob.com'
  }, {
    title: 'AdSense',
    domain: 'adsense.com'
  }, {
    title: 'AdWords',
    domain: 'adwords.com'
  }, {
    title: 'Android',
    domain: 'android.com'
  }, {
    title: 'Blogger',
    domain: 'blogger.com'
  }, {
    title: 'Chromium',
    domain: 'chromium.org'
  }, {
    title: 'Google Chrome',
    domain: 'chrome.com'
  }, {
    title: 'Chromebook',
    domain: 'chromebook.com'
  }, {
    title: 'Google Member',
    domain: 'googlemember.com'
  }, {
    title: 'Google Members',
    domain: 'googlemembers.com'
  }, {
    title: 'elgooG',
    domain: 'com.google'
  }, {
    title: 'FeedBurner',
    domain: 'feedburner.com'
  }, {
    title: 'DoubleClick',
    domain: 'doubleclick.com'
  }, {
    title: 'iGoogle',
    domain: 'igoogle.com'
  }, {
    title: 'Froogle',
    domain: 'froogle.com'
  }, {
    title: 'Google Analytics',
    domain: 'googleanalytics.com'
  }, {
    title: 'Google Code',
    domain: 'googlecode.com'
  }, {
    title: 'Google Developer Source',
    domain: 'googlesource.com'
  }, {
    title: 'Google Drive',
    domain: 'googledrive.com'
  }, {
    title: 'Google Earth',
    domain: 'googlearth.com'
  }, {
    title: 'Google Maps',
    domain: 'googlemaps.com'
  }, {
    title: 'Google Page Creator',
    domain: 'googlepagecreator.com'
  }, {
    title: 'Google Scholar',
    domain: 'googlescholar.com'
  }, {
    title: 'Gmail',
    domain: 'gmail.com'
  }, {
    title: 'Keyhole',
    domain: 'keyhole.com'
  }, {
    title: 'Made with Code',
    domain: 'madewithcode.com'
  }, {
    title: 'Panoramio',
    domain: 'panoramio.com'
  }, {
    title: 'Picasa',
    domain: 'picasa.com'
  }, {
    title: 'SketchUp',
    domain: 'sketchup.com'
  }, {
    title: 'Google Analytics',
    domain: 'urchin.com'
  }, {
    title: 'Waze',
    domain: 'waze.com'
  }, {
    title: 'YouTube',
    domain: 'youtube.com'
  }, {
    title: 'Google.org',
    domain: 'google.org'
  }, {
    title: 'Google',
    domain: 'goolge.com'
  }, {
    title: 'Google URL Shortener',
    domain: 'goo.gl'
  }];

  var g = function () {
    this.u = g.user();
    this.d = g.get_date({today: true});
    return this;
  };
  g.user = function (options) {
    var types;
    options = options || {};
    types = 'assignee requester verifier assessor'.split(' ');
    return {
      name: g.get_random(FIRST_NAMES) + ' ' + g.get_random(LAST_NAMES),
      type: options.type || g.get_random(options.types || types)
    };
  };
  g.url = function () {
    var site = g.get_random(SITES);
    return {
      icon: 'url',
      extension: 'url',
      timestamp: g.get_date({year: 2015}),
      name: site.title,
      url: 'http://' + site.domain
    };
  };
  g.get_random = function (arr) {
    return arr[_.random(0, arr.length - 1)];
  };
  g.get_words = function (count, join, arr) {
    count = count || 1;
    arr = arr || WORDS;
    join = join || ' ';
    return _.map(_.times(count, _.partial(_.random, 0, arr.length - 1, false)), function (num) {
      return arr[num];
    }).join(join);
  };
  g.title = function (len) {
    return _.startCase(g.get_words(_.random(3, 7)));
  };
  g.sentence = function (len) {
    var punctuation = '.';
    var sentence = g.get_words(_.random(3, len || 15));
    return _.capitalize(sentence) + punctuation;
  };
  g.paragraph = function (count) {
    if (count === 0) {
      return '';
    }
    return _.trim(_.times(count || 1, g.sentence).join(' '));
  };
  g.file = function (options) {
    var types;
    var name;
    var extension;
    options = options || {};
    types = 'pdf txt xls doc jpg zip '.split(' ');
    name = g.get_words(_.random(3, 7), '_');
    extension = g.get_random(types);

    return {
      name: name + (extension ? '.' + extension : ''),
      extension: extension || '',
      icon: extension || '',
      timestamp: g.get_date(),
      url: 'http:/google.com'
    };
  };
  g.get_date = function (data) {
    data = data || {};
    if (data.today) {
      return moment().format(data.format || 'MM/DD/YYYY');
    }
    data.month = data.month || _.random(1, 12);
    data.day = data.day || _.random(1, 31);
    data.year = data.year || _.random(2003, 2015);

    // TODO: Moment knows how to handle invalid dates, so I don't care
    return moment(data.month + '-' + data.day + '-' + data.year)
      .format(data.format || 'MM/DD/YYYY');
  };
  g.get_id = function (data) {
    data = data || {};

    return Number(_.uniqueId());
  };
  g.comment = function (options) {
    options = options || {};
    return {
      author: g.user({types: options.type || options.types}),
      timestamp: g.get_date({year: 2015}),
      comment: g.paragraph(_.random(0, 10)),
      attachments: g.get('file|url', _.random(0, 3))
    };
  };
  g.request = function () {
    return {
      timestamp: g.get_date({year: 2015}),
      title: g.title(),
      files: g.get('file', _.random(1, 5))
    };
  };
  g._sort_by_date = function (arr) {
    return _.sortBy(arr, function (item) {
      return moment(item.date).unix();
    }).reverse();
  };
  g.get = function (types, count, options) {
    var values;
    function getTypeFn(type) {
      var fn = g[type] || g[type.slice(0, -1)] || g['get_' + type];
      if (!type || !fn) {
        return;
      }
      return fn;
    }
    types = _.map(types.split('|'), getTypeFn);
    options = options || {};
    if (count === 'random') {
      count = _.random(0, 5);
    }
    if (count === 0) {
      return [];
    }
    values = _.times(count || 1, _.partial(g.get_random(types), options));
    if (options.sort === 'date') {
      return g._sort_by_date(values);
    }
    return values;
  };
  g._create_single = function (data, options) {
    var alias = {
      date: 'get_date',
      id: 'get_id',
      title: 'title',
      timestamp: 'get_date',
      text: 'paragraph',
      user: 'user',
      files: 'file'
    };
    var rGenerator = /^\%\S+$/i;
    var result = {};

    _.each(data, function (val, prop) {
      if (_.isArray(options.randomize) ? _.indexOf(options.randomize, prop) !== -1 : options.randomize === prop) {
        if (_.every(val, _.isString)) {
          result[prop] = g.get_random(val);
          return;
        }
        result[prop] = g._create_single(g.get_random(val), options);
        return;
      }
      if (rGenerator.test(val)) {
        result[prop] = g[alias[val.substr(1)]]();
      } else if (_.isObject(val) && !_.isEmpty(val)) {
        result[prop] = g._create_single(val, options);
      } else if (!_.isNumber(prop)) {
        result[prop] = val;
      }
    });
    return result;
  };
  g.create = function (data, options) {
    options = options || {};
    return _.times(options.count || 1, _.partial(this._create_single, data, options));
  };

  GGRC.Mockup = GGRC.Mockup || {};
  GGRC.Mockup.Generator = GGRC.Mockup.Generator || g;
  GGRC.Mockup.Generator.current = GGRC.Mockup.Generator.current || new g();
})(this.GGRC, this._);

/*!
    Copyright (C) 2016 Google Inc.
    Licensed under http://www.apache.org/licenses/LICENSE- 0 <see LICENSE file>
*/


(function (GGRC, _, Generator) {
  Generator.assessment = function () {
    return {
      title: Generator.title(),
      info_title: Generator.title(),
      description: Generator.paragraph(7),
      type: "assessment",
      state: {
        title: "In Progress",
        class_name: "inprogress"
      },
      state_color: "inprogress",
      status: "In Progress",
      id: "2",
      comments: Generator.get("comment", 10, {sort: "date", types: ["assessor", "creator", "verifier"]}),
      urls: Generator.get("url", 3),
      people: {
        "assessors": Generator.get("user", 5),
        "creator": Generator.get("user"),
        "verifiers": Generator.get("user", 3)
      },
      created_on: Generator.get_date({year: 2015}),
      due_on: Generator.get_date({year: 2015}),
      mapped: {
        "objects": Generator.create({
            icon: ["objective", "control", "regulation"],
            title: "%title",
            description: "%text",
            state: ["In Progress", "Draft"]
          }, {
            count: 5,
            randomize: ["state", "icon"]
          }),
        "requests": Generator.create({
            icon: "requests",
            title: "%title",
            description: "%text",
            state: ["In Progress", "Draft"]
          }, {
            count: 5,
            randomize: "state"
          }),
        "issues": Generator.create({
            icon: "issue",
            title: "%title",
            description: "%text",
            state: ["In Progress", "Draft"]
          }, {
            count: 5,
            randomize: "state"
          })
      },
      logs: Generator.create({
        author: "%user",
        timestamp: "%date",
        data: [{
          status: "made changes",
          field: "Comment",
          original: {
            text: "%text"
          },
          changed: {
            text: "%text"
          }
        }, {
          status: "made changes",
          field: "Evidence",
          original: {
            files: []
          },
          changed: {
            files: "%files"
          }
        }, {
          status: "made changes",
          field: "People - Requester",
          original: {
            author: "%user"
          },
          changed: {
            author: "%user"
          }
        }, {
          status: "created request",
          field: ""
        }, {
          status: "made changes",
          field: "Dates - Due on",
          original: {
            text: "%date"
          },
          changed: {
            text: "%date"
          }
        }, {
          status: "made changes",
          field: "Dates - Created on",
          original: {
            text: "%date"
          },
          changed: {
            text: "%date"
          }
        }, {
          status: "made changes",
          field: "Description",
          original: {
            text: "%text"
          },
          changed: {
            text: "%text"
          }
        }]
      }, {
        count: 5,
        randomize: "data"
      }),
      past_requests: Generator.get("request", 5)
    };
  };
})(this.GGRC, this._, GGRC.Mockup.Generator);

/*!
    Copyright (C) 2016 Google Inc.
    Licensed under http://www.apache.org/licenses/LICENSE- 0 <see LICENSE file>
*/

(function (GGRC, _, Generator) {
  Generator.task = function () {
    return {
      title: 'Simple task',
      info_title: 'Simple task',
      description: Generator.paragraph(7),
      type: 'task',
      state: {
        title: 'Draft',
        class_name: 'draft'
      },
      state_color: 'draft',
      status: 'Draft',
      id: '33',
      icon: 'calendar-check-o',
      comments: Generator.get('comment', 5, {
        sort: 'date',
        types: ['assignee', 'verifier']
      }),
      people: {
        assignee: Generator.get('user', 2),
        verifiers: Generator.get('user', 2)
      },
      created_on: Generator.get_date({year: 2015}),
      due_on: Generator.get_date({year: 2015}),
      mapped: {
        objects: Generator.create({
          icon: ['objective', 'control', 'regulation'],
          title: '%title',
          description: '%text',
          state: ['In Progress', 'Draft']
        }, {
          count: 5,
          randomize: ['state', 'icon']
        }),
        requests: Generator.create({
          icon: 'requests',
          title: '%title',
          description: '%text',
          state: ['In Progress', 'Draft']
        }, {
          count: 5,
          randomize: 'state'
        }),
        issues: Generator.create({
          icon: 'issue',
          title: '%title',
          description: '%text',
          state: ['In Progress', 'Draft']
        }, {
          count: 5,
          randomize: 'state'
        })
      },
      logs: Generator.create({
        author: '%user',
        timestamp: '%date',
        data: [{
          status: 'made changes',
          field: 'Comment',
          original: {
            text: '%text'
          },
          changed: {
            text: '%text'
          }
        }, {
          status: 'made changes',
          field: 'Evidence',
          original: {
            files: []
          },
          changed: {
            files: '%files'
          }
        }, {
          status: 'made changes',
          field: 'People - Requester',
          original: {
            author: '%user'
          },
          changed: {
            author: '%user'
          }
        }, {
          status: 'created request',
          field: ''
        }, {
          status: 'made changes',
          field: 'Dates - Due on',
          original: {
            text: '%date'
          },
          changed: {
            text: '%date'
          }
        }, {
          status: 'made changes',
          field: 'Dates - Created on',
          original: {
            text: '%date'
          },
          changed: {
            text: '%date'
          }
        }, {
          status: 'made changes',
          field: 'Description',
          original: {
            text: '%text'
          },
          changed: {
            text: '%text'
          }
        }]
      }, {
        count: 5,
        randomize: 'data'
      })
    };
  };
})(this.GGRC, this._, GGRC.Mockup.Generator);

(function (GGRC, Generator) {
  GGRC.Bootstrap.Mockups = GGRC.Bootstrap.Mockups || {};
  GGRC.Bootstrap.Mockups.Assessor = GGRC.Bootstrap.Mockups.Assessor || {};

  GGRC.Bootstrap.Mockups.Assessor.Assessments = {
    title: "Assessments",
    icon: "grcicon-assessment-color",
    template: "/assessor/assessments.mustache",
    hide_filter: true,
    children: Generator.get("assessment", 3)
  };
})(GGRC || {}, GGRC.Mockup.Generator);

(function (GGRC, Generator) {
  GGRC.Bootstrap.Mockups = GGRC.Bootstrap.Mockups || {};
  GGRC.Bootstrap.Mockups.Request = GGRC.Bootstrap.Mockups.Request || {};

  GGRC.Bootstrap.Mockups.Request.Info = {
    title: "Info",
    icon: "info-circle",
    template: "/request/info.mustache",
    info_title: "My new audit",
    description: Generator.paragraph(7),
    state: {
      title: "In Progress",
      class_name: "inprogress"
    },
    people: {
      "audit lead": Generator.get("user", 5),
      "auditor": Generator.get("user", 3)
    },
    comments: can.Map(Generator.get("comment", 10, {sort: "date"})),
    logs: Generator.create({
      author: "%user",
      timestamp: "%date",
      data: [{
        status: "made changes",
        field: "Comment",
        original: {
          text: "%text"
        },
        changed: {
          text: "%text"
        }
      }, {
        status: "made changes",
        field: "Evidence",
        original: {
          files: []
        },
        changed: {
          files: "%files"
        }
      }, {
        status: "made changes",
        field: "People - Requester",
        original: {
          author: "%user"
        },
        changed: {
          author: "%user"
        }
      }, {
        status: "created request",
        field: ""
      }, {
        status: "made changes",
        field: "Dates - Due on",
        original: {
          text: "%date"
        },
        changed: {
          text: "%date"
        }
      }, {
        status: "made changes",
        field: "Dates - Created on",
        original: {
          text: "%date"
        },
        changed: {
          text: "%date"
        }
      }, {
        status: "made changes",
        field: "Description",
        original: {
          text: "%text"
        },
        changed: {
          text: "%text"
        }
      }]
    }, {
      count: 5,
      randomize: "data"
    }),
    mapped_objects: [{
      icon: "objective",
      title: "090.7068 objective 1",
      state: "Draft",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
    }, {
      icon: "control",
      title: "Access to the Private Network with expired Key v0906984",
      state: "In Progress",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
    }, {
      icon: "regulation",
      title: "a regulation object",
      state: "In Progress",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
    }],
    past_requests: Generator.get("request", 5)
  };
})(GGRC || {}, GGRC.Mockup.Generator);

(function (GGRC, Generator) {
  GGRC.Bootstrap.Mockups = GGRC.Bootstrap.Mockups || {};
  GGRC.Bootstrap.Mockups.Request = GGRC.Bootstrap.Mockups.Request || {};

  GGRC.Bootstrap.Mockups.Request.Requests = {
    title: "Requests",
    icon: "request",
    template: "/request/widget.mustache",
    children: [{
      title: "My new request",
      info_title: "My new request",
      description: Generator.paragraph(7),
      notes: Generator.paragraph(9),
      test: Generator.paragraph(11),
      state: {
        title: "In Progress",
        class_name: "inprogress"
      },
      state_color: "inprogress",
      type: "audit",
      status: "In Progress",
      id: "2",
      comments: Generator.get("comment", 10, {sort: "date"}),
      code: "REQ-007",
      people: {
        "assignee": Generator.get("user", 5),
        "requester": Generator.get("user"),
        "verifier": Generator.get("user", 3)
      },
      created_on: "12/03/14",
      due_on: "12/31/15",
      mapped: {
        "objects": Generator.create({
            icon: ["objective", "control", "regulation"],
            title: "%title",
            description: "%text",
            state: ["In Progress", "Draft"]
          }, {
            count: 5,
            randomize: ["state", "icon"]
          }),
        "requests": Generator.create({
            icon: "requests",
            title: "%title",
            description: "%text",
            state: ["In Progress", "Draft"]
          }, {
            count: 5,
            randomize: "state"
          }),
        "issues": Generator.create({
            icon: "issue",
            title: "%title",
            description: "%text",
            state: ["In Progress", "Draft"]
          }, {
            count: 5,
            randomize: "state"
          })
      },
      logs: Generator.create({
        author: "%user",
        timestamp: "%date",
        data: [{
          status: "made changes",
          field: "Comment",
          original: {
            text: "%text"
          },
          changed: {
            text: "%text"
          }
        }, {
          status: "made changes",
          field: "Evidence",
          original: {
            files: []
          },
          changed: {
            files: "%files"
          }
        }, {
          status: "made changes",
          field: "People - Requester",
          original: {
            author: "%user"
          },
          changed: {
            author: "%user"
          }
        }, {
          status: "created request",
          field: ""
        }, {
          status: "made changes",
          field: "Dates - Due on",
          original: {
            text: "%date"
          },
          changed: {
            text: "%date"
          }
        }, {
          status: "made changes",
          field: "Dates - Created on",
          original: {
            text: "%date"
          },
          changed: {
            text: "%date"
          }
        }, {
          status: "made changes",
          field: "Description",
          original: {
            text: "%text"
          },
          changed: {
            text: "%text"
          }
        }]
      }, {
        count: 5,
        randomize: "data"
      }),
      past_requests: Generator.get("request", 5),
      children: [{
        title: "Other title",
        type: "process",
        id: "23"
      }, {
        title: "YOLO",
        type: "issue",
        id: "24"
      }, {
        title: "R U Talking to me",
        type: "system",
        id: "12"
      }]
    }, {
      title: "Simple Request for Programs",
      type: "issue",
      id: "3",
      status: "Draft",
      children: []
    }, {
      title: "Request made for Sections inspection",
      type: "audit",
      id: "5",
      status: "Draft",
      children: [{
        title: "Other title",
        type: "process",
        id: "63"
      }, {
        title: "YOLO",
        type: "issue",
        id: "344"
      }, {
        title: "R U Talking to me",
        type: "system",
        id: "342"
      }, {
        title: "Other title",
        type: "process",
        id: "33"
      }, {
        title: "YOLO",
        type: "issue",
        id: "54"
      }, {
        title: "R U Talking to me",
        type: "system",
        id: "62"
      }]
    }]
  };
})(GGRC || {}, GGRC.Mockup.Generator);

(function (GGRC, Generator) {
  GGRC.Bootstrap.Mockups = GGRC.Bootstrap.Mockups || {};
  GGRC.Bootstrap.Mockups.Request = GGRC.Bootstrap.Mockups.Request || {};

  GGRC.Bootstrap.Mockups.Request.Objectives = {
    title: "Objectives",
    icon: "objective",
    template: "/request/widget.mustache",
    children: [{
      title: "Hidden Bitter Mustard",
      info_title: "Hidden Bitter Mustard",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae ante dapibus lacus dictum vestibulum. Nullam finibus semper convallis. Ut libero mauris, viverra nec augue eget, congue viverra felis. Aenean ut arcu vel tortor rhoncus dictum id vel urna. Sed a enim laoreet diam lacinia euismod.",
      state: "Draft",
      state_color: "draft",
      type: "objective",
      status: "Draft",
      id: "2",
      files: [{
        icon: "zip",
        date: "09/24/2015",
        name: "Compressed_files.zip",
        url: "https://github.com/Compressed_files.zip"
      }, {
        icon: "url",
        date: "09/23/2015",
        name: "https://github.com/",
        url: "https://github.com/"
      }, {
        icon: "",
        date: "09/22/2015",
        name: "simple_file.reg",
        url: "http://google.com/"
      }, {
        icon: "text",
        date: "09/21/2015",
        name: "canjs-observe-bug.txt",
        url: "http://google.com/"
      }, {
        icon: "image",
        date: "09/19/2015",
        name: "Image_of_nature.png",
        url: "http://google.com/"
      }, {
        icon: "xls",
        date: "04/18/2015",
        name: "Simple_Excel_document.xls",
        url: "http://google.com/"
      }, {
        icon: "doc",
        date: "04/15/2014",
        name: "Simple_Word_document.doc",
        url: "http://google.com/"
      }, {
        icon: "pdf",
        date: "04/05/2010",
        name: "MTV_001_SIGNED_LoginAccess_List.pdf",
        url: "http://google.com/"
      }],
      people_assignee: Generator.get("user", 5),
      people_requester: Generator.get("user"),
      people_secondary: Generator.get("user"),
      created_on: "12/03/14",
      due_on: "12/31/15",
      type_a: "assignee",
      type_r: "requester",
      type_v: "verifier",
      mapped_objects: [{
        icon: "objective",
        title: "090.7068 objective 1",
        state: "Draft",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
      }, {
        icon: "control",
        title: "Access to the Private Network with expired Key v0906984",
        state: "In Progress",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
      }, {
        icon: "regulation",
        title: "a regulation object",
        state: "In Progress",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
      }],
      comments: [{
        type: "assignee",
        author: "Albert Chan",
        date: "09/20/2015 07:31:02am PDT",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non mauris euismod, suscipit velit eu, imperdiet ex. Curabitur nisl diam, blandit in luctus ac, eleifend quis libero. Morbi in lobortis risus. Vestibulum congue dictum finibus.",
        attachments: [{
          url: "http://google.com/",
          title: "canjs-observe-bug.txt"
        }]
      }, {
        type: "verifier",
        author: "Prasanna V.",
        date: "08/30/2015 05:31:02am PDT",
        text: "Curabitur nisl diam, blandit in luctus ac, eleifend quis libero. Morbi in lobortis risus. Vestibulum congue dictum finibus."
      }, {
        type: "requester",
        author: "Jost Novljan",
        date: "07/21/2015 01:31:02pm PDT",
        text: "See usecase here: https://docs.google.com/document/d/1kU6DgyJBOxbPX5eDhphq97dcMhg-b-LpzTJT27XlHYk/edit#heading=h.9wrhlxa3ye2d."
      }, {
        type: "assignee",
        author: "Albert Chan",
        date: "07/18/2015 03:16:02pm PDT",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non mauris euismod, suscipit velit eu, imperdiet ex. Curabitur nisl diam, blandit in luctus ac, eleifend quis libero. Morbi in lobortis risus. Vestibulum congue dictum finibus."
      }],
      logs: [{
        type: "requester",
        author: "Jost Novljan",
        log_status: "made changes",
        date: "09/19/2015 03:23:55pm PDT",
        field: "Comment",
        original_value: [{
          text: ""
        }],
        new_value: [{
          text: "See usecase here: https://docs.google.com/document/d/1kU6DgyJBOxbPX5eDhphq97dcMhg-b-LpzTJT27XlHYk/edit#heading=h.9wrhlxa3ye2d."
        }]
      }, {
        type: "verifier",
        author: "Prasanna V.",
        log_status: "made changes",
        date: "09/19/2015 05:31:02am PDT",
        field: "Comment",
        original_value: [{
          text: ""
        }],
        new_value: [{
          text: "Curabitur nisl diam, blandit in luctus ac, eleifend quis libero. Morbi in lobortis risus. Vestibulum congue dictum finibus."
        }]
      }, {
        type: "assignee",
        author: "Albert Chan",
        log_status: "made changes",
        date: "09/18/2015 05:31:02am PDT",
        field: "People - Requester",
        original_value: [{
          text: "Ella Cinder"
        }],
        new_value: [{
          text: "Josh Smith"
        }]
      }, {
        type: "assignee",
        author: "Albert Chan",
        log_status: "made changes",
        date: "09/14/2015 05:31:02am PDT",
        field: "Dates - Due on",
        original_value: [{
          text: "12/31/14"
        }],
        new_value: [{
          text: "12/31/15"
        }]
      }, {
        type: "assignee",
        author: "Albert Chan",
        log_status: "made changes",
        date: "09/12/2015 05:31:02am PDT",
        field: "Dates - Created on",
        original_value: [{
          text: "12/03/13"
        }],
        new_value: [{
          text: "12/03/14"
        }]
      }, {
        type: "assignee",
        author: "Albert Chan",
        log_status: "made changes",
        date: "09/08/2015 05:31:02am PDT",
        field: "Evidence",
        original_value: [{
          text: "",
          file_list: [{
            icon: "pdf",
            file_name: "MTV_001_SIGNED_LoginAccess_List.pdf"
          }, {
            icon: "doc",
            file_name: "Simple_Word_document.doc"
          }]
        }],
        new_value: [{
          text: "",
          file_list: [{
            icon: "pdf",
            file_name: "MTV_001_SIGNED_LoginAccess_List.pdf"
          }, {
            icon: "doc",
            file_name: "Simple_Word_document.doc"
          }, {
            icon: "xls",
            file_name: "Simple_Excel_document.xls"
          }, {
            icon: "text",
            file_name: "Some_file_from_Google_Drive.txt"
          }, {
            icon: "image",
            file_name: "Image_of_nature.png"
          }, {
            icon: "",
            file_name: "canjs-observe-bug.reg"
          }]
        }]
      }, {
        type: "assignee",
        author: "Albert Chan",
        log_status: "made changes",
        date: "09/04/2015 3:30:00pm PDT",
        field: "Description",
        original_value: [{
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae ante dapibus lacus dictum vestibulum. Nullam finibus semper convallis. Ut libero mauris, viverra nec augue eget, congue viverra felis. Aenean ut arcu vel tortor rhoncus dictum id vel urna."
        }],
        new_value: [{
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae ante dapibus lacus dictum vestibulum. Nullam finibus semper convallis. Ut libero mauris, viverra nec augue eget, congue viverra felis. Aenean ut arcu vel tortor rhoncus dictum id vel urna. Sed a enim laoreet diam lacinia euismod."
        }]
      }, {
        type: "assignee",
        author: "Albert Chan",
        log_status: "made changes",
        date: "09/03/2015 07:15:23am PDT",
        field: "Description",
        original_value: [{
          text: "Cras vitae ante dapibus lacus dictum vestibulum. Nullam finibus semper convallis. Ut libero mauris, viverra nec augue eget, congue viverra felis. Aenean ut arcu vel tortor rhoncus dictum id vel urna."
        }],
        new_value: [{
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae ante dapibus lacus dictum vestibulum. Nullam finibus semper convallis. Ut libero mauris, viverra nec augue eget, congue viverra felis. Aenean ut arcu vel tortor rhoncus dictum id vel urna."
        }]
      }, {
        type: "assignee",
        author: "Albert Chan",
        log_status: "made changes",
        date: "09/03/2015 05:31:02am PDT",
        field: "Description",
        original_value: [{
          text: ""
        }],
        new_value: [{
          text: "Cras vitae ante dapibus lacus dictum vestibulum. Nullam finibus semper convallis. Ut libero mauris, viverra nec augue eget, congue viverra felis. Aenean ut arcu vel tortor rhoncus dictum id vel urna."
        }]
      }, {
        type: "assignee",
        author: "Albert Chan",
        log_status: "made changes",
        date: "09/02/2015 09:00:12am PDT",
        field: "State",
        original_value: [{
          text: "Draft"
        }],
        new_value: [{
          text: "In progress"
        }]
      }, {
        type: "assignee",
        author: "Albert Chan",
        log_status: "created request",
        date: "09/01/2015 11:07:35am PDT",
        field: "",
        original_value: [{
          text: ""
        }],
        new_value: [{
          text: ""
        }]
      }],
      past_requests: [{
        date: "26/09/2015",
        title: "My new request lorem ipsum dolor sit amet consectetur adipiscing elit morbi et turpis et arcu viverra posuere in et sapien",
        past_requests_files: [{
          icon: "pdf",
          name: "MTV_001_SIGNED_LoginAccess_List.pdf",
          date: "26/09/2015",
          url: "http://www.this-is-great.com"
        }, {
          icon: "pdf",
          name: "MTV_aug_SIGNED_LoginAccess_List.pdf",
          date: "26/09/2015",
          url: "http://www.this-is-great.com"
        }, {
          icon: "pdf",
          name: "MTV_sep_SIGNED_LoginAccess_List.pdf",
          date: "26/09/2015",
          url: "http://www.this-is-great.com"
        }],
        mapped_objects: [{
          icon: "objective",
          title: "090.7068 objective 1",
          state: "Draft",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
        }, {
          icon: "control",
          title: "Access to the Private Network with expired Key v0906984",
          state: "In Progress",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
        }, {
          icon: "regulation",
          title: "a regulation object",
          state: "In Progress",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
        }]
      }, {
        date: "20/09/2015",
        title: "My new request",
        past_requests_files: [{
          icon: "pdf",
          name: "MTV_001_SIGNED_LoginAccess_List.pdf",
          date: "26/09/2015",
          url: "http://www.this-is-great.com"
        }, {
          icon: "pdf",
          name: "MTV_aug_SIGNED_LoginAccess_List.pdf",
          date: "26/09/2015",
          url: "http://www.this-is-great.com"
        }, {
          icon: "pdf",
          name: "MTV_sep_SIGNED_LoginAccess_List.pdf",
          date: "26/09/2015",
          url: "http://www.this-is-great.com"
        }],
        mapped_objects: [{
          icon: "objective",
          title: "090.7068 objective 1",
          state: "Draft",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
        }, {
          icon: "control",
          title: "Access to the Private Network with expired Key v0906984",
          state: "In Progress",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
        }, {
          icon: "regulation",
          title: "a regulation object",
          state: "In Progress",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
        }]
      }, {
        date: "10/09/2015",
        title: "My new request",
        past_requests_files: [{
          icon: "pdf",
          name: "MTV_001_SIGNED_LoginAccess_List.pdf",
          date: "26/09/2015",
          url: "http://www.this-is-great.com"
        }, {
          icon: "pdf",
          name: "MTV_aug_SIGNED_LoginAccess_List.pdf",
          date: "26/09/2015",
          url: "http://www.this-is-great.com"
        }, {
          icon: "pdf",
          name: "MTV_sep_SIGNED_LoginAccess_List.pdf",
          date: "26/09/2015",
          url: "http://www.this-is-great.com"
        }],
        mapped_objects: [{
          icon: "objective",
          title: "090.7068 objective 1",
          state: "Draft",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
        }, {
          icon: "control",
          title: "Access to the Private Network with expired Key v0906984",
          state: "In Progress",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
        }, {
          icon: "regulation",
          title: "a regulation object",
          state: "In Progress",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
        }]
      }],
      children: [{
        title: "Other title",
        type: "process",
        id: "23"
      }, {
        title: "YOLO",
        type: "issue",
        id: "24"
      }, {
        title: "R U Talking to me",
        type: "system",
        id: "12"
      }]
    }, {
      title: "Stormy Jazz",
      type: "objective",
      id: "3",
      status: "Draft",
      children: []
    }, {
      title: "Hungry Clown",
      type: "objective",
      id: "5",
      status: "Draft",
      children: [{
        title: "Other title",
        type: "process",
        id: "63"
      }, {
        title: "YOLO",
        type: "issue",
        id: "344"
      }, {
        title: "R U Talking to me",
        type: "system",
        id: "342"
      }, {
        title: "Other title",
        type: "process",
        id: "33"
      }, {
        title: "YOLO",
        type: "issue",
        id: "54"
      }, {
        title: "R U Talking to me",
        type: "system",
        id: "62"
      }]
    }]
  };
})(GGRC || {}, GGRC.Mockup.Generator);

(function (GGRC, Generator) {
  GGRC.Bootstrap.Mockups = GGRC.Bootstrap.Mockups || {};
  GGRC.Bootstrap.Mockups.Request = GGRC.Bootstrap.Mockups.Request || {};

  GGRC.Bootstrap.Mockups.Request.Regulations = {
    title: "Regulations",
    icon: "regulation",
    template: "/request/widget.mustache",
    children: [{
      title: "My new regulation",
      info_title: "My new regulation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae ante dapibus lacus dictum vestibulum. Nullam finibus semper convallis. Ut libero mauris, viverra nec augue eget, congue viverra felis. Aenean ut arcu vel tortor rhoncus dictum id vel urna. Sed a enim laoreet diam lacinia euismod.",
      state: "Draft",
      state_color: "draft",
      type: "regulation",
      status: "Draft",
      id: "2",
      files: [{
        icon: "zip",
        date: "09/24/2015",
        name: "Compressed_files.zip",
        url: "https://github.com/Compressed_files.zip"
      }, {
        icon: "url",
        date: "09/23/2015",
        name: "https://github.com/",
        url: "https://github.com/"
      }, {
        icon: "",
        date: "09/22/2015",
        name: "simple_file.reg",
        url: "http://google.com/"
      }, {
        icon: "text",
        date: "09/21/2015",
        name: "canjs-observe-bug.txt",
        url: "http://google.com/"
      }, {
        icon: "image",
        date: "09/19/2015",
        name: "Image_of_nature.png",
        url: "http://google.com/"
      }, {
        icon: "xls",
        date: "04/18/2015",
        name: "Simple_Excel_document.xls",
        url: "http://google.com/"
      }, {
        icon: "doc",
        date: "04/15/2014",
        name: "Simple_Word_document.doc",
        url: "http://google.com/"
      }, {
        icon: "pdf",
        date: "04/05/2010",
        name: "MTV_001_SIGNED_LoginAccess_List.pdf",
        url: "http://google.com/"
      }],
      people_assignee: Generator.get("user", 3),
      people_requester: Generator.get("user"),
      people_secondary: Generator.get("user"),
      created_on: "12/03/14",
      due_on: "12/31/15",
      type_a: "assignee",
      type_r: "requester",
      type_v: "verifier",
      mapped_objects: [{
        icon: "objective",
        title: "090.7068 objective 1",
        state: "Draft",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
      }, {
        icon: "control",
        title: "Access to the Private Network with expired Key v0906984",
        state: "In Progress",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
      }, {
        icon: "regulation",
        title: "a regulation object",
        state: "In Progress",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
      }],
      comments: [{
        type: "assignee",
        author: "Albert Chan",
        date: "09/20/2015 07:31:02am PDT",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non mauris euismod, suscipit velit eu, imperdiet ex. Curabitur nisl diam, blandit in luctus ac, eleifend quis libero. Morbi in lobortis risus. Vestibulum congue dictum finibus.",
        attachments: [{
          url: "http://google.com/",
          title: "canjs-observe-bug.txt"
        }]
      }, {
        type: "verifier",
        author: "Prasanna V.",
        date: "08/30/2015 05:31:02am PDT",
        text: "Curabitur nisl diam, blandit in luctus ac, eleifend quis libero. Morbi in lobortis risus. Vestibulum congue dictum finibus."
      }, {
        type: "requester",
        author: "Jost Novljan",
        date: "07/21/2015 01:31:02pm PDT",
        text: "See usecase here: https://docs.google.com/document/d/1kU6DgyJBOxbPX5eDhphq97dcMhg-b-LpzTJT27XlHYk/edit#heading=h.9wrhlxa3ye2d."
      }, {
        type: "assignee",
        author: "Albert Chan",
        date: "07/18/2015 03:16:02pm PDT",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non mauris euismod, suscipit velit eu, imperdiet ex. Curabitur nisl diam, blandit in luctus ac, eleifend quis libero. Morbi in lobortis risus. Vestibulum congue dictum finibus."
      }],
      logs: [{
        type: "requester",
        author: "Jost Novljan",
        log_status: "made changes",
        date: "09/19/2015 03:23:55pm PDT",
        field: "Comment",
        original_value: [{
          text: ""
        }],
        new_value: [{
          text: "See usecase here: https://docs.google.com/document/d/1kU6DgyJBOxbPX5eDhphq97dcMhg-b-LpzTJT27XlHYk/edit#heading=h.9wrhlxa3ye2d."
        }]
      }, {
        type: "verifier",
        author: "Prasanna V.",
        log_status: "made changes",
        date: "09/19/2015 05:31:02am PDT",
        field: "Comment",
        original_value: [{
          text: ""
        }],
        new_value: [{
          text: "Curabitur nisl diam, blandit in luctus ac, eleifend quis libero. Morbi in lobortis risus. Vestibulum congue dictum finibus."
        }]
      }, {
        type: "assignee",
        author: "Albert Chan",
        log_status: "made changes",
        date: "09/18/2015 05:31:02am PDT",
        field: "People - Requester",
        original_value: [{
          text: "Ella Cinder"
        }],
        new_value: [{
          text: "Josh Smith"
        }]
      }, {
        type: "assignee",
        author: "Albert Chan",
        log_status: "made changes",
        date: "09/14/2015 05:31:02am PDT",
        field: "Dates - Due on",
        original_value: [{
          text: "12/31/14"
        }],
        new_value: [{
          text: "12/31/15"
        }]
      }, {
        type: "assignee",
        author: "Albert Chan",
        log_status: "made changes",
        date: "09/12/2015 05:31:02am PDT",
        field: "Dates - Created on",
        original_value: [{
          text: "12/03/13"
        }],
        new_value: [{
          text: "12/03/14"
        }]
      }, {
        type: "assignee",
        author: "Albert Chan",
        log_status: "made changes",
        date: "09/08/2015 05:31:02am PDT",
        field: "Evidence",
        original_value: [{
          text: "",
          file_list: [{
            icon: "pdf",
            file_name: "MTV_001_SIGNED_LoginAccess_List.pdf"
          }, {
            icon: "doc",
            file_name: "Simple_Word_document.doc"
          }]
        }],
        new_value: [{
          text: "",
          file_list: [{
            icon: "pdf",
            file_name: "MTV_001_SIGNED_LoginAccess_List.pdf"
          }, {
            icon: "doc",
            file_name: "Simple_Word_document.doc"
          }, {
            icon: "xls",
            file_name: "Simple_Excel_document.xls"
          }, {
            icon: "text",
            file_name: "Some_file_from_Google_Drive.txt"
          }, {
            icon: "image",
            file_name: "Image_of_nature.png"
          }, {
            icon: "",
            file_name: "canjs-observe-bug.reg"
          }]
        }]
      }, {
        type: "assignee",
        author: "Albert Chan",
        log_status: "made changes",
        date: "09/04/2015 3:30:00pm PDT",
        field: "Description",
        original_value: [{
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae ante dapibus lacus dictum vestibulum. Nullam finibus semper convallis. Ut libero mauris, viverra nec augue eget, congue viverra felis. Aenean ut arcu vel tortor rhoncus dictum id vel urna."
        }],
        new_value: [{
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae ante dapibus lacus dictum vestibulum. Nullam finibus semper convallis. Ut libero mauris, viverra nec augue eget, congue viverra felis. Aenean ut arcu vel tortor rhoncus dictum id vel urna. Sed a enim laoreet diam lacinia euismod."
        }]
      }, {
        type: "assignee",
        author: "Albert Chan",
        log_status: "made changes",
        date: "09/03/2015 07:15:23am PDT",
        field: "Description",
        original_value: [{
          text: "Cras vitae ante dapibus lacus dictum vestibulum. Nullam finibus semper convallis. Ut libero mauris, viverra nec augue eget, congue viverra felis. Aenean ut arcu vel tortor rhoncus dictum id vel urna."
        }],
        new_value: [{
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae ante dapibus lacus dictum vestibulum. Nullam finibus semper convallis. Ut libero mauris, viverra nec augue eget, congue viverra felis. Aenean ut arcu vel tortor rhoncus dictum id vel urna."
        }]
      }, {
        type: "assignee",
        author: "Albert Chan",
        log_status: "made changes",
        date: "09/03/2015 05:31:02am PDT",
        field: "Description",
        original_value: [{
          text: ""
        }],
        new_value: [{
          text: "Cras vitae ante dapibus lacus dictum vestibulum. Nullam finibus semper convallis. Ut libero mauris, viverra nec augue eget, congue viverra felis. Aenean ut arcu vel tortor rhoncus dictum id vel urna."
        }]
      }, {
        type: "assignee",
        author: "Albert Chan",
        log_status: "made changes",
        date: "09/02/2015 09:00:12am PDT",
        field: "State",
        original_value: [{
          text: "Draft"
        }],
        new_value: [{
          text: "In progress"
        }]
      }, {
        type: "assignee",
        author: "Albert Chan",
        log_status: "created request",
        date: "09/01/2015 11:07:35am PDT",
        field: "",
        original_value: [{
          text: ""
        }],
        new_value: [{
          text: ""
        }]
      }],
      past_requests: [{
        date: "26/09/2015",
        title: "My new request lorem ipsum dolor sit amet consectetur adipiscing elit morbi et turpis et arcu viverra posuere in et sapien",
        past_requests_files: [{
          icon: "pdf",
          name: "MTV_001_SIGNED_LoginAccess_List.pdf",
          date: "26/09/2015",
          url: "http://www.this-is-great.com"
        }, {
          icon: "pdf",
          name: "MTV_aug_SIGNED_LoginAccess_List.pdf",
          date: "26/09/2015",
          url: "http://www.this-is-great.com"
        }, {
          icon: "pdf",
          name: "MTV_sep_SIGNED_LoginAccess_List.pdf",
          date: "26/09/2015",
          url: "http://www.this-is-great.com"
        }],
        mapped_objects: [{
          icon: "objective",
          title: "090.7068 objective 1",
          state: "Draft",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
        }, {
          icon: "control",
          title: "Access to the Private Network with expired Key v0906984",
          state: "In Progress",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
        }, {
          icon: "regulation",
          title: "a regulation object",
          state: "In Progress",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
        }]
      }, {
        date: "20/09/2015",
        title: "My new request",
        past_requests_files: [{
          icon: "pdf",
          name: "MTV_001_SIGNED_LoginAccess_List.pdf",
          date: "26/09/2015",
          url: "http://www.this-is-great.com"
        }, {
          icon: "pdf",
          name: "MTV_aug_SIGNED_LoginAccess_List.pdf",
          date: "26/09/2015",
          url: "http://www.this-is-great.com"
        }, {
          icon: "pdf",
          name: "MTV_sep_SIGNED_LoginAccess_List.pdf",
          date: "26/09/2015",
          url: "http://www.this-is-great.com"
        }],
        mapped_objects: [{
          icon: "objective",
          title: "090.7068 objective 1",
          state: "Draft",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
        }, {
          icon: "control",
          title: "Access to the Private Network with expired Key v0906984",
          state: "In Progress",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
        }, {
          icon: "regulation",
          title: "a regulation object",
          state: "In Progress",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
        }]
      }, {
        date: "10/09/2015",
        title: "My new request",
        past_requests_files: [{
          icon: "pdf",
          name: "MTV_001_SIGNED_LoginAccess_List.pdf",
          date: "26/09/2015",
          url: "http://www.this-is-great.com"
        }, {
          icon: "pdf",
          name: "MTV_aug_SIGNED_LoginAccess_List.pdf",
          date: "26/09/2015",
          url: "http://www.this-is-great.com"
        }, {
          icon: "pdf",
          name: "MTV_sep_SIGNED_LoginAccess_List.pdf",
          date: "26/09/2015",
          url: "http://www.this-is-great.com"
        }],
        mapped_objects: [{
          icon: "objective",
          title: "090.7068 objective 1",
          state: "Draft",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
        }, {
          icon: "control",
          title: "Access to the Private Network with expired Key v0906984",
          state: "In Progress",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
        }, {
          icon: "regulation",
          title: "a regulation object",
          state: "In Progress",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
        }]
      }],
      children: [{
        title: "Other title",
        type: "process",
        id: "23"
      }, {
        title: "YOLO",
        type: "issue",
        id: "24"
      }, {
        title: "R U Talking to me",
        type: "system",
        id: "12"
      }]
    }, {
      title: "Severe Rusty Creek",
      type: "regulation",
      id: "3",
      status: "Draft",
      children: []
    }, {
      title: "Early Furious Flannel",
      type: "regulation",
      id: "5",
      status: "Draft",
      children: [{
        title: "Other title",
        type: "process",
        id: "63"
      }, {
        title: "YOLO",
        type: "issue",
        id: "344"
      }, {
        title: "R U Talking to me",
        type: "system",
        id: "342"
      }, {
        title: "Other title",
        type: "process",
        id: "33"
      }, {
        title: "YOLO",
        type: "issue",
        id: "54"
      }, {
        title: "R U Talking to me",
        type: "system",
        id: "62"
      }]
    }]
  };
})(GGRC || {}, GGRC.Mockup.Generator);

(function (GGRC, Generator) {
  GGRC.Bootstrap.Mockups = GGRC.Bootstrap.Mockups || {};
  GGRC.Bootstrap.Mockups.Request = GGRC.Bootstrap.Mockups.Request || {};

  GGRC.Bootstrap.Mockups.Request.Controls = {
    title: "Controls",
    icon: "control",
    template: "/request/widget.mustache",
    children: [{
      title: "Yellow Dead Dog Control",
      info_title: "Yellow Dead Dog Control",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae ante dapibus lacus dictum vestibulum. Nullam finibus semper convallis. Ut libero mauris, viverra nec augue eget, congue viverra felis. Aenean ut arcu vel tortor rhoncus dictum id vel urna. Sed a enim laoreet diam lacinia euismod.",
      state: "Draft",
      state_color: "draft",
      type: "control",
      status: "Draft",
      id: "2",
      files: [{
        icon: "zip",
        date: "09/24/2015",
        name: "Compressed_files.zip",
        url: "https://github.com/Compressed_files.zip"
      }, {
        icon: "url",
        date: "09/23/2015",
        name: "https://github.com/",
        url: "https://github.com/"
      }, {
        icon: "",
        date: "09/22/2015",
        name: "simple_file.reg",
        url: "http://google.com/"
      }, {
        icon: "text",
        date: "09/21/2015",
        name: "canjs-observe-bug.txt",
        url: "http://google.com/"
      }, {
        icon: "image",
        date: "09/19/2015",
        name: "Image_of_nature.png",
        url: "http://google.com/"
      }, {
        icon: "xls",
        date: "04/18/2015",
        name: "Simple_Excel_document.xls",
        url: "http://google.com/"
      }, {
        icon: "doc",
        date: "04/15/2014",
        name: "Simple_Word_document.doc",
        url: "http://google.com/"
      }, {
        icon: "pdf",
        date: "04/05/2010",
        name: "MTV_001_SIGNED_LoginAccess_List.pdf",
        url: "http://google.com/"
      }],
      people_assignee: Generator.get("user", 5),
      people_requester: Generator.get("user"),
      people_secondary: Generator.get("user"),
      created_on: "12/03/14",
      due_on: "12/31/15",
      type_a: "assignee",
      type_r: "requester",
      type_v: "verifier",
      mapped_objects: [{
        icon: "objective",
        title: "090.7068 objective 1",
        state: "Draft",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
      }, {
        icon: "control",
        title: "Access to the Private Network with expired Key v0906984",
        state: "In Progress",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
      }, {
        icon: "regulation",
        title: "a regulation object",
        state: "In Progress",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
      }],
      comments: [{
        type: "assignee",
        author: "Albert Chan",
        date: "09/20/2015 07:31:02am PDT",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non mauris euismod, suscipit velit eu, imperdiet ex. Curabitur nisl diam, blandit in luctus ac, eleifend quis libero. Morbi in lobortis risus. Vestibulum congue dictum finibus.",
        attachments: [{
          url: "http://google.com/",
          title: "canjs-observe-bug.txt"
        }]
      }, {
        type: "verifier",
        author: "Prasanna V.",
        date: "08/30/2015 05:31:02am PDT",
        text: "Curabitur nisl diam, blandit in luctus ac, eleifend quis libero. Morbi in lobortis risus. Vestibulum congue dictum finibus."
      }, {
        type: "requester",
        author: "Jost Novljan",
        date: "07/21/2015 01:31:02pm PDT",
        text: "See usecase here: https://docs.google.com/document/d/1kU6DgyJBOxbPX5eDhphq97dcMhg-b-LpzTJT27XlHYk/edit#heading=h.9wrhlxa3ye2d."
      }, {
        type: "assignee",
        author: "Albert Chan",
        date: "07/18/2015 03:16:02pm PDT",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non mauris euismod, suscipit velit eu, imperdiet ex. Curabitur nisl diam, blandit in luctus ac, eleifend quis libero. Morbi in lobortis risus. Vestibulum congue dictum finibus."
      }],
      logs: [{
        type: "requester",
        author: "Jost Novljan",
        log_status: "made changes",
        date: "09/19/2015 03:23:55pm PDT",
        field: "Comment",
        original_value: [{
          text: ""
        }],
        new_value: [{
          text: "See usecase here: https://docs.google.com/document/d/1kU6DgyJBOxbPX5eDhphq97dcMhg-b-LpzTJT27XlHYk/edit#heading=h.9wrhlxa3ye2d."
        }]
      }, {
        type: "verifier",
        author: "Prasanna V.",
        log_status: "made changes",
        date: "09/19/2015 05:31:02am PDT",
        field: "Comment",
        original_value: [{
          text: ""
        }],
        new_value: [{
          text: "Curabitur nisl diam, blandit in luctus ac, eleifend quis libero. Morbi in lobortis risus. Vestibulum congue dictum finibus."
        }]
      }, {
        type: "assignee",
        author: "Albert Chan",
        log_status: "made changes",
        date: "09/18/2015 05:31:02am PDT",
        field: "People - Requester",
        original_value: [{
          text: "Ella Cinder"
        }],
        new_value: [{
          text: "Josh Smith"
        }]
      }, {
        type: "assignee",
        author: "Albert Chan",
        log_status: "made changes",
        date: "09/14/2015 05:31:02am PDT",
        field: "Dates - Due on",
        original_value: [{
          text: "12/31/14"
        }],
        new_value: [{
          text: "12/31/15"
        }]
      }, {
        type: "assignee",
        author: "Albert Chan",
        log_status: "made changes",
        date: "09/12/2015 05:31:02am PDT",
        field: "Dates - Created on",
        original_value: [{
          text: "12/03/13"
        }],
        new_value: [{
          text: "12/03/14"
        }]
      }, {
        type: "assignee",
        author: "Albert Chan",
        log_status: "made changes",
        date: "09/08/2015 05:31:02am PDT",
        field: "Evidence",
        original_value: [{
          text: "",
          file_list: [{
            icon: "pdf",
            file_name: "MTV_001_SIGNED_LoginAccess_List.pdf"
          }, {
            icon: "doc",
            file_name: "Simple_Word_document.doc"
          }]
        }],
        new_value: [{
          text: "",
          file_list: [{
            icon: "pdf",
            file_name: "MTV_001_SIGNED_LoginAccess_List.pdf"
          }, {
            icon: "doc",
            file_name: "Simple_Word_document.doc"
          }, {
            icon: "xls",
            file_name: "Simple_Excel_document.xls"
          }, {
            icon: "text",
            file_name: "Some_file_from_Google_Drive.txt"
          }, {
            icon: "image",
            file_name: "Image_of_nature.png"
          }, {
            icon: "",
            file_name: "canjs-observe-bug.reg"
          }]
        }]
      }, {
        type: "assignee",
        author: "Albert Chan",
        log_status: "made changes",
        date: "09/04/2015 3:30:00pm PDT",
        field: "Description",
        original_value: [{
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae ante dapibus lacus dictum vestibulum. Nullam finibus semper convallis. Ut libero mauris, viverra nec augue eget, congue viverra felis. Aenean ut arcu vel tortor rhoncus dictum id vel urna."
        }],
        new_value: [{
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae ante dapibus lacus dictum vestibulum. Nullam finibus semper convallis. Ut libero mauris, viverra nec augue eget, congue viverra felis. Aenean ut arcu vel tortor rhoncus dictum id vel urna. Sed a enim laoreet diam lacinia euismod."
        }]
      }, {
        type: "assignee",
        author: "Albert Chan",
        log_status: "made changes",
        date: "09/03/2015 07:15:23am PDT",
        field: "Description",
        original_value: [{
          text: "Cras vitae ante dapibus lacus dictum vestibulum. Nullam finibus semper convallis. Ut libero mauris, viverra nec augue eget, congue viverra felis. Aenean ut arcu vel tortor rhoncus dictum id vel urna."
        }],
        new_value: [{
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae ante dapibus lacus dictum vestibulum. Nullam finibus semper convallis. Ut libero mauris, viverra nec augue eget, congue viverra felis. Aenean ut arcu vel tortor rhoncus dictum id vel urna."
        }]
      }, {
        type: "assignee",
        author: "Albert Chan",
        log_status: "made changes",
        date: "09/03/2015 05:31:02am PDT",
        field: "Description",
        original_value: [{
          text: ""
        }],
        new_value: [{
          text: "Cras vitae ante dapibus lacus dictum vestibulum. Nullam finibus semper convallis. Ut libero mauris, viverra nec augue eget, congue viverra felis. Aenean ut arcu vel tortor rhoncus dictum id vel urna."
        }]
      }, {
        type: "assignee",
        author: "Albert Chan",
        log_status: "made changes",
        date: "09/02/2015 09:00:12am PDT",
        field: "State",
        original_value: [{
          text: "Draft"
        }],
        new_value: [{
          text: "In progress"
        }]
      }, {
        type: "assignee",
        author: "Albert Chan",
        log_status: "created request",
        date: "09/01/2015 11:07:35am PDT",
        field: "",
        original_value: [{
          text: ""
        }],
        new_value: [{
          text: ""
        }]
      }],
      past_requests: [{
        date: "26/09/2015",
        title: "My new request lorem ipsum dolor sit amet consectetur adipiscing elit morbi et turpis et arcu viverra posuere in et sapien",
        past_requests_files: [{
          icon: "pdf",
          name: "MTV_001_SIGNED_LoginAccess_List.pdf",
          date: "26/09/2015",
          url: "http://www.this-is-great.com"
        }, {
          icon: "pdf",
          name: "MTV_aug_SIGNED_LoginAccess_List.pdf",
          date: "26/09/2015",
          url: "http://www.this-is-great.com"
        }, {
          icon: "pdf",
          name: "MTV_sep_SIGNED_LoginAccess_List.pdf",
          date: "26/09/2015",
          url: "http://www.this-is-great.com"
        }],
        mapped_objects: [{
          icon: "objective",
          title: "090.7068 objective 1",
          state: "Draft",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
        }, {
          icon: "control",
          title: "Access to the Private Network with expired Key v0906984",
          state: "In Progress",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
        }, {
          icon: "regulation",
          title: "a regulation object",
          state: "In Progress",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
        }]
      }, {
        date: "20/09/2015",
        title: "My new request",
        past_requests_files: [{
          icon: "pdf",
          name: "MTV_001_SIGNED_LoginAccess_List.pdf",
          date: "26/09/2015",
          url: "http://www.this-is-great.com"
        }, {
          icon: "pdf",
          name: "MTV_aug_SIGNED_LoginAccess_List.pdf",
          date: "26/09/2015",
          url: "http://www.this-is-great.com"
        }, {
          icon: "pdf",
          name: "MTV_sep_SIGNED_LoginAccess_List.pdf",
          date: "26/09/2015",
          url: "http://www.this-is-great.com"
        }],
        mapped_objects: [{
          icon: "objective",
          title: "090.7068 objective 1",
          state: "Draft",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
        }, {
          icon: "control",
          title: "Access to the Private Network with expired Key v0906984",
          state: "In Progress",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
        }, {
          icon: "regulation",
          title: "a regulation object",
          state: "In Progress",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
        }]
      }, {
        date: "10/09/2015",
        title: "My new request",
        past_requests_files: [{
          icon: "pdf",
          name: "MTV_001_SIGNED_LoginAccess_List.pdf",
          date: "26/09/2015",
          url: "http://www.this-is-great.com"
        }, {
          icon: "pdf",
          name: "MTV_aug_SIGNED_LoginAccess_List.pdf",
          date: "26/09/2015",
          url: "http://www.this-is-great.com"
        }, {
          icon: "pdf",
          name: "MTV_sep_SIGNED_LoginAccess_List.pdf",
          date: "26/09/2015",
          url: "http://www.this-is-great.com"
        }],
        mapped_objects: [{
          icon: "objective",
          title: "090.7068 objective 1",
          state: "Draft",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
        }, {
          icon: "control",
          title: "Access to the Private Network with expired Key v0906984",
          state: "In Progress",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
        }, {
          icon: "regulation",
          title: "a regulation object",
          state: "In Progress",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
        }]
      }],
      children: [{
        title: "Other title",
        type: "process",
        id: "23"
      }, {
        title: "YOLO",
        type: "issue",
        id: "24"
      }, {
        title: "R U Talking to me",
        type: "system",
        id: "12"
      }]
    }, {
      title: "Small Sledgehammer",
      type: "control",
      id: "3",
      status: "Draft",
      children: []
    }, {
      title: "Lonesome Dusty Butter",
      type: "control",
      id: "5",
      status: "Draft",
      children: [{
        title: "Other title",
        type: "process",
        id: "63"
      }, {
        title: "YOLO",
        type: "issue",
        id: "344"
      }, {
        title: "R U Talking to me",
        type: "system",
        id: "342"
      }, {
        title: "Other title",
        type: "process",
        id: "33"
      }, {
        title: "YOLO",
        type: "issue",
        id: "54"
      }, {
        title: "R U Talking to me",
        type: "system",
        id: "62"
      }]
    }]
  };
})(GGRC || {}, GGRC.Mockup.Generator);

(function (GGRC, Generator) {
  GGRC.Bootstrap.Mockups = GGRC.Bootstrap.Mockups || {};
  GGRC.Bootstrap.Mockups.Request = GGRC.Bootstrap.Mockups.Request || {};

  GGRC.Bootstrap.Mockups.Request.Assessments = {
    title: "Assessments",
    icon: "assessment",
    template: "/request/widget.mustache",
    children: GGRC.Bootstrap.Mockups.Assessor.Assessments.children
  };
})(GGRC || {}, GGRC.Mockup.Generator);

(function (GGRC, Generator) {
  GGRC.Bootstrap.Mockups = GGRC.Bootstrap.Mockups || {};
  GGRC.Bootstrap.Mockups.Workflow = GGRC.Bootstrap.Mockups.Workflow || {};

  GGRC.Bootstrap.Mockups.Workflow.Workflows = {
    title: "Active Cycles",
    icon: "cycle",
    template: "/workflow/cycle.mustache",
    hide_filter: false,
    children: Generator.create({
      title: "%title",
      type: "workflow",
      due_on: '12/31/2017',
      id: "%id",
      children: Generator.create({
        title: "Task Group",
        type: "task_group",
        icon: "task_group",
        id: "%id",
        children: Generator.get("task")
      })
    })
  };
})(GGRC || {}, GGRC.Mockup.Generator);

(function (GGRC, Generator) {
  GGRC.Bootstrap.Mockups = GGRC.Bootstrap.Mockups || {};
  GGRC.Bootstrap.Mockups.Workflow = GGRC.Bootstrap.Mockups.Workflow || {};

  GGRC.Bootstrap.Mockups.Workflow.History = {
    title: "History",
    icon: "history",
    // template: "/workflow/cycle.mustache",
    hide_filter: false
  };
})(GGRC || {}, GGRC.Mockup.Generator);

(function (GGRC, Generator) {
  GGRC.Bootstrap.Mockups = GGRC.Bootstrap.Mockups || {};
  GGRC.Bootstrap.Mockups.Workflow = GGRC.Bootstrap.Mockups.Workflow || {};

  GGRC.Bootstrap.Mockups.Workflow.People = {
    title: "People",
    icon: "person",
    // template: "/workflow/cycle.mustache",
    hide_filter: false
  };
})(GGRC || {}, GGRC.Mockup.Generator);

(function (GGRC, Generator) {
  GGRC.Bootstrap.Mockups = GGRC.Bootstrap.Mockups || {};
  GGRC.Bootstrap.Mockups.Workflow = GGRC.Bootstrap.Mockups.Workflow || {};

  GGRC.Bootstrap.Mockups.Workflow.Info = {
    title: "Setup",
    icon: "info-circle",
    template: "/workflow/info.mustache",
    people: {
      "manager": Generator.get("user", 3)
    },
    task_people: {
      "assignee": Generator.get("user", 3),
      "verifier": Generator.get("user", 3)
    },
    mapped: {
      "objects": Generator.create({
        icon: ["objective", "control", "regulation"],
        title: "%title",
        description: "%text",
        state: ["In Progress", "Draft"]
      }, {
        count: 5,
        randomize: ["state", "icon"]
      }),
      "requests": Generator.create({
        icon: "requests",
        title: "%title",
        description: "%text",
        state: ["In Progress", "Draft"]
      }, {
        count: 5,
        randomize: "state"
      }),
      "issues": Generator.create({
        icon: "issue",
        title: "%title",
        description: "%text",
        state: ["In Progress", "Draft"]
      }, {
        count: 5,
        randomize: "state"
      })
    },
    tasks: Generator.create({
      type: "task",
      title: {
        value: "Simple task",
        hidable: false
      },
      description: {
        value: "Governanceit way sustained for organization. Interests all. Perspective tribe goals. Where policies successful. With regulated coherent. Governance governanceinformation authority body perspective. Respect processes governance regulation eells proposes.",
        hidable: true
      },
      task_type: {
        option: "Rich text",
        value: "Articulated are being already banks deals at differences internet control articulated. As where. Respect on governance. Decision-making term issues. Established found governance. Goal regulators include. Way becht authority interaction postulated in.",
        hidable: true,
        size: 5
      },
      group: {
        value: "Group 007",
        hidable: true
      },
      start_date: {
        value: "22/03/16",
        hidable: false
      },
      end_date: {
        value: "22/03/18",
        hidable: false
      },
      mappedd: {
        objects: Generator.create({
          icon: ['objective', 'control', 'regulation'],
          title: '%title',
          description: '%text',
          state: ['In Progress', 'Draft']
        }, {
          count: 5,
          randomize: ['state', 'icon']
        })
      }
    }),
    frequency_select: Generator.create({
      data: [{
        option_text: "One time",
        value: "one_time"
      }, {
        option_text: "Weekly",
        value: "weekly"
      }, {
        option_text: "Monthly",
        value: "monthly"
      }, {
        option_text: "Quarterly",
        value: "quarterly"
      }, {
        option_text: "Annually",
        value: "annually"
      }]
    }),
    type_select: Generator.create({
      data: [{
        option_text: "Rich text",
        value: "text"
      }, {
        option_text: "Dropdown",
        value: "menu"
      }, {
        option_text: "Checkboxes",
        value: "checkbox"
      }]
    }),
    frequency: Generator.create({
      hidable: false,
      size: 6
    }),
    button_draft: "Save draft",
    button_reset: "Don’t save",
    button_active: "Activate"
  };
})(GGRC || {}, GGRC.Mockup.Generator);

(function (GGRC, Generator) {
  GGRC.Bootstrap.Mockups = GGRC.Bootstrap.Mockups || {};
  GGRC.Bootstrap.Mockups.QWorkflow = GGRC.Bootstrap.Mockups.QWorkflow || {};

  GGRC.Bootstrap.Mockups.QWorkflow.Info = {
    title: "Program Info",
    info_title: "My simple Program",
    icon: "info-circle",
    template: "/quick-workflow/info.mustache",
    description: Generator.paragraph(8),
    notes: Generator.paragraph(5),
    manager: "prasanna@reciprocitylabs.com",
    prime_contact: "prasanna@reciprocitylabs.com",
    sec_contact: "None",
    url: "a private program a private program a private program a private program a private program a private program a private program a private program a private program a private program a private program a private program",
    ref_url: "a private program a private program a private program a private program a private program a private program a private program a private program a private program a private program a private program a private program a private program a private progra"
  };
})(GGRC || {}, GGRC.Mockup.Generator);

(function (GGRC, Generator) {
  GGRC.Bootstrap.Mockups = GGRC.Bootstrap.Mockups || {};
  GGRC.Bootstrap.Mockups.QWorkflow = GGRC.Bootstrap.Mockups.QWorkflow || {};

  GGRC.Bootstrap.Mockups.QWorkflow.Controls = {
    title: "Controls",
    icon: "control",
    template: "/request/widget.mustache",
    children: [{
      title: "Yellow Dead Dog Control",
      info_title: "Yellow Dead Dog Control",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae ante dapibus lacus dictum vestibulum. Nullam finibus semper convallis. Ut libero mauris, viverra nec augue eget, congue viverra felis. Aenean ut arcu vel tortor rhoncus dictum id vel urna. Sed a enim laoreet diam lacinia euismod.",
      state: "Draft",
      state_color: "draft",
      type: "control",
      status: "Draft",
      id: "2",
    }, {
      title: "Small Sledgehammer",
      type: "control",
      id: "3",
      status: "Draft"
    }, {
      title: "Lonesome Dusty Butter",
      type: "control",
      id: "5",
      status: "Draft"
    }]
  };
})(GGRC || {}, GGRC.Mockup.Generator);

/*!
    Copyright (C) 2016 Google Inc.
    Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
*/

(function (can, $, Generator) {
  can.Component.extend({
    tag: 'add-comment',
    template: can.view('/static/mustache/mockup_base_templates/add_comment.mustache'),
    scope: {
      attachments: new can.List()
    },
    events: {
      cleanPanel: function () {
        this.scope.attachments.replace([]);
        this.element.find('textarea').val('');
      },
      '.js-trigger-attachdata click': function (el, ev) {
        var type = el.data('type');
        var typeFn = Generator[type];
        if (!typeFn) {
          return;
        }
        this.scope.attachments.push(typeFn());
      },
      '.btn-success click': function (el, ev) {
        var $textarea = this.element.find('.add-comment textarea');
        var text = $.trim($textarea.val());
        var attachments = this.scope.attachments;

        if (!text.length && !attachments.length) {
          return;
        }
        this.scope.data.unshift({
          author: Generator.current.u,
          timestamp: Generator.current.d,
          comment: text,
          attachments: _.map(attachments, function (attachment) {
            return attachment;
          })
        });
        this.cleanPanel();
      }
    }
  });
})(this.can, this.can.$, GGRC.Mockup.Generator);

/*!
    Copyright (C) 2016 Google Inc.
    Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
*/

(function (can, $, Generator) {
  can.Component.extend({
    tag: 'attachment-list',
    template: can.view('/static/mustache/mockup_base_templates/attachment_list.mustache'),
    scope: {
      title: '@',
      icon: '@',
      button: '@',
      types: '@',
      files: new can.List()
    },
    events: {
      inserted: 'updateFiles',
      '{scope.data} add': 'updateFiles',
      '{scope.data} remove': 'updateFiles',
      updateFiles: function () {
        var types = this.scope.attr('types');
        var isNegation = types.charAt(0) === '!';
        var result;
        if (isNegation) {
          types = types.slice(1);
        }
        result = _.reduce(this.scope.attr('data'), function (memo, comment) {
          var attachments = _.filter(comment.attachments, function (attachment) {
            if (isNegation) {
              return attachment.extension !== types;
            }
            return attachment.extension === types;
          });
          if (attachments.length) {
            return memo.concat(_.filter(attachments, function (attachment) {
              return !attachment.attr('deleted');
            }));
          }
          return memo;
        }, []);
        this.scope.attr('files', result);
      },
      '.js-trigger--delete click': function (el, ev) {
        var file = el.data('file');
        file.attr('deleted', true);
        this.updateFiles();
      },
      '.btn-draft click': function (el, ev) {
        var attachments = Generator.get(this.scope.attr('types') === 'url' ? 'url' : 'file');
        return this.scope.attr('data').unshift({
          author: Generator.current.u,
          timestamp: Generator.current.d,
          attachments: attachments,
          comment: ''
        });
      }
    }
  });
})(this.can, this.can.$, GGRC.Mockup.Generator);

/*!
    Copyright (C) 2016 Google Inc.
    Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
*/

(function (can, $, Generator) {
  can.Control('CMS.Controllers.MockupInfoPanel', {
    defaults: {
      view: '/static/mustache/mockup_base_templates/info_panel.mustache',
      slide: 240,
      default_height: 'min',
      active_pin: null,
      minHeight: 240
    }
  }, {
    init: function () {
      this.options.active_pin = this.options.default_height;
      this.element.html(can.view(this.options.view, this.options));
      this.element.removeClass('hidden').height(0);
    },
    setSize: function (size) {
      var contentHeight;
      var height;
      function getHeight(height, size) {
        var increment = {
          deselect: 0,
          min: 1,
          normal: 2,
          max: 3
        };
        return increment[size] * height;
      }
      contentHeight = Math.floor(($(window).height() - $('.top-inner-nav').height() - $('.header-content').height() - $('.footer').height()) / 3) - 20;
      height = getHeight(contentHeight, size || this.options.default_height);

      this.element
        .show()
        .animate({
          height: height
        }, {
          duration: this.options.slide,
          complete: function () {
            if (size === 'deselect') {
              this.element.hide();
              this.active.attr('active', false);
              can.route.removeAttr('item');
            }
          }.bind(this)
        });
    },
    '.pin-action a click': function (el, ev) {
      var active = el.data('size');
      el.find('i').addClass('active').closest('li').siblings().find('i')
        .removeClass('active');
      this.options.active_pin = active;
      this.setSize(active);
    },
    '{can.route} tab': function (router, ev, tab) {
      this.activePanel = _.findWhere(this.options.views, {title: tab});
      this.element.height(0).hide();
    },
    '{can.route} item': function (router, ev, item) {
      var view;
      var tab;
      function findNeedle(list, slug) {
        var prop;
        var result;
        for (prop in list) {
          if (!list.hasOwnProperty(prop) || prop.indexOf('_') === 0) {
            continue;
          }
          if (list[prop].type === slug.type &&
              Number(list[prop].id) === Number(slug.id)) {
            return list[prop];
          }
          if (list[prop].children) {
            result = findNeedle(list[prop].children, slug);
            if (result) {
              return result;
            }
          }
        }
      }
      if (!item || !item.length) {
        return;
      }
      item = item.split('__');
      item = _.last(item).split('-');
      tab = _.filter(this.options.views, function (view) {
        return view.title === can.route.attr('tab');
      })[0];

      view = findNeedle(tab.children, {
        id: item[1],
        type: item[0]
      });

      if (this.cached) {
        this.cached.destroy();
      }
      this.cached = new CMS.Controllers.MockupInfoView(this.element.find('.tier-content'), {
        view: view
      });
      this.setSize();
    }
  });

  can.Control('CMS.Controllers.MockupInfoView', {
    defaults: {
      comment_attachments: new can.List(),
      templates: {
        assessment: '/static/mustache/mockup_base_templates/assessment_panel.mustache',
        task: '/static/mustache/mockup_base_templates/task_panel.mustache',
        'default': '/static/mustache/mockup_base_templates/request_panel.mustache'
      }
    }
  }, {
    init: function () {
      var template;
      if (!this.options.view || !this.options.view.type) {
        return;
      }
      template = this.options.templates[this.options.view.type] || this.options.templates.default;
      this.element.html(can.view(template, this.options.view));
    },
    '.js-trigger-reuse click': function (el, ev) {
      var view = this.options.view;
      var checked = _.reduce(this.options.view.past_requests, function (val, memo) {
        return val.concat(_.filter(memo.files, function (file) {
          var status = file.checked;
          file.attr('checked', false);
          return status;
        }));
      }, []);
      this.element.find('.past-items-list .js-trigger-pastfile')
        .prop('checked', false);
      view.comments.push({
        author: Generator.current.u,
        timestamp: Generator.current.d,
        attachments: checked,
        comment: ''
      });
    },
    '.js-trigger-pastfile change': function (el, ev) {
      var data = el.data('item');
      var isChecked = el.prop('checked');
      data.attr('checked', isChecked);
    }
  });
})(this.can, this.can.$, GGRC.Mockup.Generator);

/*!
    Copyright (C) 2016 Google Inc.
    Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
*/

(function (can, $, Generator) {
  can.Control('CMS.Controllers.MockupTreeView', {
  }, {
    init: function (el, opts) {
      can.each(this.options.instance.children, function (child) {
        var $item = $('<li/>', {'class': 'tree-item'});
        new CMS.Controllers.MockupTreeItem($item, {
          item: child
        });
        this.element.append($item);
      }, this);
    },
    '{can.route} item': function (router, ev, current, previous) {
      if (!previous) {
        return;
      }
      function findNeedle(list, slug) {
        var prop;
        var result;
        for (prop in list) {
          if (!list.hasOwnProperty(prop) || prop.indexOf('_') === 0) {
            continue;
          }
          if (list[prop].type === slug.type &&
              Number(list[prop].id) === Number(slug.id)) {
            return list[prop];
          }
          if (list[prop].children) {
            result = findNeedle(list[prop].children, slug);
            if (result) {
              return result;
            }
          }
        }
      }
      current = current.split('__');
      previous = previous.split('__');
      _.each(_.difference(previous, current), function (slug) {
        var item;
        slug = slug.split('-');
        item = findNeedle(this.options.instance.children, {
          id: slug[1],
          type: slug[0]
        });
        if (item) {
          item.attr('active', false);
        }
      }, this);
    },
    '{instance.children} change': function (list, ev, which, type, status) {
      var groups = groupChanged(which.split('.'));
      var instance = this.options.instance;
      var url = [];
      function groupChanged(arr) {
        var groups = [];
        var check = arr;
        while (check.length) {
          check = arr.splice(0, 2);
          if (check.length) {
            groups.push(check);
          }
        }
        return groups;
      }
      if (!status) {
        return;
      }

      can.each(groups, function (group) {
        var index = Number(group[0]);
        var prop = group[1];

        if (prop === 'active') {
          instance = instance.children[index];

          url.push(instance.type + '-' + instance.id);
          instance.attr('active', true);
          can.route.attr('item', url.join('__'));
        } else {
          instance = instance[prop][index];
          url.push(instance.type + '-' + instance.id);
          instance.attr('active', true);
        }
      }, this);
    }
  });

  can.Control('CMS.Controllers.MockupTreeItem', {
    defaults: {
      templates: {
        task: '/static/mustache/mockup_base_templates/tree_item_task.mustache',
        task_group: '/static/mustache/mockup_base_templates/tree_item_task.mustache',
        workflow: '/static/mustache/mockup_base_templates/tree_item_task.mustache',
        'default': '/static/mustache/mockup_base_templates/tree_item.mustache'
      }
    }
  }, {
    init: function (el, options) {
      var template = this.options.templates[options.item.type] ||
        this.options.templates.default;

      this.element.html(can.view(template, options.item));
      can.each(options.item.children, function (child) {
        var $item = $('<li/>', {'class': 'tree-item'});
        new CMS.Controllers.MockupTreeItem($item, {
          item: child
        });
        this.element.find('.tree-structure').append($item);
      }, this);
    },
    '.select click': function (el, ev) {
      var item = el.closest('.tree-item');
      var status = this.options.item.attr('active');
      if (this.element.is(item)) {
        if (status) {
          this.options.item.attr('active', false);
        }
        this.options.item.attr('active', true);
      }
    }
  });
})(this.can, this.can.$, GGRC.Mockup.Generator);


/*!
    Copyright (C) 2016 Google Inc.
    Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
*/

(function (can, $, Generator) {
  can.route(":tab", {tab: "Info"});
  can.route(":tab/:item");

  // Activate router
  $(document).ready(can.route.ready);

  can.Control("CMS.Controllers.MockupHelper", {
    defaults: {
      title_view: GGRC.mustache_path + "/title.mustache",
      object_views: {},
      cached: null
    }
  }, {
    init: function (el, opts) {
      var views = new can.Map(_.map(opts.views, function (view) {
            return new can.Model.Cacheable(view);
          })),
          options = {
            views: views
          };
      new CMS.Controllers.MockupNav(this.element.find(".internav"), options);
      new CMS.Controllers.MockupInfoPanel(this.element.find(".info-pin"), _.extend(options, {
        default_height: opts.infopin || "min"
      }));
      new CMS.Controllers.MockupModalView(this.element);

      this.element.find(".title-content").html(can.view(this.options.title_view, opts.object));
      this.options.views = views;
    },
    "{can.route} tab": function (router, ev, tab) {
      var exists = _.findWhere(this.options.views, {title: tab});
      if (!exists) {
        return can.route.attr("tab", _.first(this.options.views).title);
      }
      this.options.views.each(function (view) {
        var isActive = view.title === tab;
        view.attr("active", isActive);
        if (isActive) {
          if (this.cached) {
            this.cached.destroy();
          }
          this.cached = new CMS.Controllers.MockupView(this.element.find(".inner-content"), {
            view: view
          });
        }
      }.bind(this));
    }
  });

  can.Control("CMS.Controllers.MockupNav", {
    defaults: {
      view: "/static/mustache/mockup_base_templates/nav_item.mustache"
    }
  }, {
    "{views} change": function (list, ev, which, type, status) {
      which = which.split(".");
      var index = +which[0],
          prop = which[1];
      if (prop === "active" && status) {
        this.element.html(can.view(this.options.view, this.options));
      }
    }
  });

  can.Control("CMS.Controllers.MockupView", {
    defaults: {
      title_view: GGRC.mustache_path + "/title.mustache",
      slide_speed: 240
    }
  }, {
      init: function (el, options) {
        this.element.html(can.view(GGRC.mustache_path + options.view.template, _.extend(this.options, {
          instance: options.view
        })));
        if (options.view.children) {
          new CMS.Controllers.MockupTreeView(this.element.find(".base-tree-view"), {
            instance: options.view
          });
        }
        if (options.view.title === "Info") {
          this.cached = new CMS.Controllers.MockupInfoView(this.element);
        }
      },
      destroy: function () {
        if (this.cached) {
          this.cached.destroy();
        }
        can.Control.prototype.destroy.call(this);
      },
      ".filter-trigger click": function (el, ev) {
        this.element.find(".tree-filter").slideToggle(this.options.slide_speed);
      }
  });

  can.Control("CMS.Controllers.MockupModalView", {
    defaults: {
      instance: null
    }
  }, {
    '.modal hide': function (el, ev) {
      this.el = null;
      this.template = null;
      this.options.instance = null;
    },
    '.modal show': function (el, ev) {
      var template = el.data('template');
      var instance = el.data('instance');

      if (template) {
        this.options.originalInstance = instance.instance;
        this.options.instance = _.clone(instance.instance);
        this.template = can.view(template, _.extend(this.options.instance, {
          editable: true
        }));
        this.el = el;
        this.el.find('.modal-inner-content')
          .empty()
          .append(this.template);
      }
    },
    '.modal .add-task-trigger click': function (el, ev) {
      this.options.instance.tasks.push({
        type: 'task',
        title: {
          value: '',
          hidable: false
        },
        description: {
          value: '',
          hidable: true
        },
        task_type: {
          option: 'Rich text',
          value: '',
          hidable: true,
          size: 5
        },
        group: {
          value: '',
          hidable: true
        },
        start_date: {
          value: moment().format('MM/DD/YY'),
          hidable: false
        },
        end_date: {
          value: moment().format('MM/DD/YY'),
          hidable: false
        },
        mapped: {
          objects: {}
        }
      });
      if (this.options.instance.tasks.length > 1) {
        $(".modal .close-block").removeClass("hidden");
      }
    },
    ".modal .close-trigger click": function (el, ev) {
      var repeatBlock,
          close = $(".modal .close-block");

      el.closest('.repeated-block').remove();
      repeatBlock = $('.modal .repeated-block').length;

      if (repeatBlock === 1) {
        close.addClass("hidden");
      }
    },
    ".modal .js-toggle-field change": function (el, ev) {
      var target = this.element.find(el.data("target")),
          val = el.data("value");

      target.prop("disabled", el.val() !== val);
    },
    ".modal #underAssessment change": function (el, ev) {
      var isEnabled = el.val() === "Control";
      this.element.find(".js-toggle-controlplans").prop("disabled", !isEnabled)
          .closest("label").toggleClass("disabled", !isEnabled);
    },
    ".modal .task-people-trigger change": function (el, ev) {
      var isEach = el.val() === 'each',
          isAll = el.val() === 'all';

      if (isEach) {
        this.element.find('.people-option').show();
        this.element.find('.people-regular').hide();
        this.element.find('.active-trigger').addClass('disabled');
        this.element.find('.active-trigger').attr('rel', 'tooltip');
        this.element.find('.active-trigger')
        .attr('data-original-title', 'Save draft and go to Setup workflow to activate it');
      } else if (isAll) {
        this.element.find('.people-option').hide();
        this.element.find('.people-regular').show();
        this.element.find('.active-trigger').removeClass('disabled');
        this.element.find('.active-trigger').removeAttr('rel');
        this.element.find('.active-trigger').removeAttr('data-original-title');
      }
    },
    '.all change' : function (el, ev) {
      var $allTrigger = $('.all'),
          $allCheckboxes = $('.attr-checkbox'),
          $hidable = $('.hidable');

      if (!$allTrigger.hasClass('triggered')) {
        $allTrigger.addClass('triggered');
        $hidable.removeClass('hidden');
        $allCheckboxes.prop('checked', true);
      } else {
        $allTrigger.removeClass('triggered');
        $hidable.addClass('hidden');
        $allCheckboxes.prop('checked', false);
      }
    },
    ".type-select change": function (el, ev) {
      var isOptions = el.val() === 'menu' || el.val() === 'checkbox',
          isText = el.val() === 'text';

      if (isOptions) {
        this.element.find('.text-wrap').hide();
        this.element.find('.options-wrap').show();
      } else if (isText) {
        this.element.find('.text-wrap').show();
        this.element.find('.options-wrap').hide();
      }
    },
    "a.field-hide click" : function(el, ev) { //field hide
      var $el = $(el),
        $hidable = $el.closest('[class*="span"].hidable');

      $hidable.addClass("hidden");
      this.options.reset_visible = true;
      var ui_unit = $hidable.find('[tabindex]');
      var i, tab_value;
      for (i = 0; i < ui_unit.length; i++) {
        tab_value = $(ui_unit[i]).attr('tabindex');
        if(tab_value > 0) {
          this.options.ui_array[tab_value-1] = 1;
          $(ui_unit[i]).attr('tabindex', '-1');
          $(ui_unit[i]).attr('uiindex', tab_value);
        }
      }
      return false;
    },
    '.dropdown-menu-form ul click' : function (el, ev) {
      ev.stopPropagation();
    },
    '.dropdown-menu-form input change' : function (el, ev) {
      var checkedValue = el.val(),
          targetValue = this.element
          .find("[data-value='" + checkedValue + "']");

      if (targetValue.hasClass('hidden')) {
        targetValue.removeClass('hidden');
      } else {
        targetValue.addClass('hidden');
      }
    },
    ".object-check-all click": function (el, ev) {
      ev.preventDefault();

      this.element.find('.object-check-single').prop('checked', true);
    }
  });

})(this.can, this.can.$, GGRC.Mockup.Generator);

/*!
    Copyright (C) 2016 Google Inc.
    Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
*/


(function (can, $) {

  // Only load this file when the URL is mockups/sample:
  if (window.location.pathname !== "/mockups/assessor") {
    return;
  }

  // Setup the object page:
  var mockup = new CMS.Controllers.MockupHelper($("body"), {
    // Object:
    object: {
      icon: "grciconlarge-assessment",
      title: "My Assessments",
    },
    infopin: "normal",
    // Views:
    views: _.values(GGRC.Bootstrap.Mockups.Assessor)
  });
})(this.can, this.can.$);

/*!
    Copyright (C) 2016 Google Inc.
    Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
*/


(function (can, $) {

  // Only load this file when the URL is mockups/sample:
  if (window.location.pathname !== "/mockups/request") {
    return;
  }

  // Setup the object page:
  var mockup = new CMS.Controllers.MockupHelper($("body"), {
    // Object:
    object: {
      icon: "grciconlarge-audit",
      title: "My new audit"
    },
    // Views:
    views: _.values(GGRC.Bootstrap.Mockups.Request)
  });
})(this.can, this.can.$);

/*!
    Copyright (C) 2016 Google Inc.
    Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
*/


(function (can, $) {

  // Only load this file when the URL is mockups/sample:
  if (window.location.pathname !== "/mockups/workflow") {
    return;
  }

  // Setup the object page:
  var mockup = new CMS.Controllers.MockupHelper($("body"), {
    // Object:
    object: {
      icon: "workflow",
      title: "Workflow",
    },
    // Views:
    views: _.values(GGRC.Bootstrap.Mockups.Workflow)
  });
})(this.can, this.can.$);

/*!
    Copyright (C) 2016 Google Inc.
    Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
*/


(function (can, $) {

  // Only load this file when the URL is mockups/sample:
  if (window.location.pathname !== "/mockups/quick-workflow") {
    return;
  }

  // Setup the object page:
  var mockup = new CMS.Controllers.MockupHelper($("body"), {
    // Object:
    object: {
      icon: "program",
      title: "My simple Program",
    },
    // Views:
    views: _.values(GGRC.Bootstrap.Mockups.QWorkflow)
  });
})(this.can, this.can.$);
