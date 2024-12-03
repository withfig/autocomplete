const completionSpec: Fig.Spec = {
  name: "geo-routes",
  description:
    "With the Amazon Location Routes API you can calculate routes and estimate travel time based on up-to-date road network and live traffic information. Calculate optimal travel routes and estimate travel times using up-to-date road network and traffic data. Key features include:   Point-to-point routing with estimated travel time, distance, and turn-by-turn directions   Multi-point route optimization to minimize travel time or distance   Route matrices for efficient multi-destination planning   Isoline calculations to determine reachable areas within specified time or distance thresholds   Map-matching to align GPS traces with the road network",
  subcommands: [
    {
      name: "calculate-isolines",
      description:
        "Use the CalculateIsolines action to find service areas that can be reached in a given threshold of time, distance",
      options: [
        {
          name: "--allow",
          description: "Features that are allowed while calculating. a route",
          args: {
            name: "structure",
          },
        },
        {
          name: "--arrival-time",
          description:
            "Time of arrival at the destination. Time format: YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm  Examples:  2020-04-22T17:57:24Z   2020-04-22T17:57:24+02:00",
          args: {
            name: "string",
          },
        },
        {
          name: "--avoid",
          description:
            "Features that are avoided while calculating a route. Avoidance is on a best-case basis. If an avoidance can't be satisfied for a particular case, it violates the avoidance and the returned response produces a notice for the violation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--depart-now",
          description: "Uses the current time as the time of departure",
        },
        {
          name: "--no-depart-now",
          description: "Uses the current time as the time of departure",
        },
        {
          name: "--departure-time",
          description:
            "Time of departure from thr origin. Time format:YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm  Examples:  2020-04-22T17:57:24Z   2020-04-22T17:57:24+02:00",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination",
          description:
            "The final position for the route. In the World Geodetic System (WGS 84) format: [longitude, latitude]",
          args: {
            name: "list",
          },
        },
        {
          name: "--destination-options",
          description: "Destination related options",
          args: {
            name: "structure",
          },
        },
        {
          name: "--isoline-geometry-format",
          description:
            "The format of the returned IsolineGeometry.  Default Value:FlexiblePolyline",
          args: {
            name: "string",
          },
        },
        {
          name: "--isoline-granularity",
          description: "Defines the granularity of the returned Isoline",
          args: {
            name: "structure",
          },
        },
        {
          name: "--key",
          description:
            "Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request",
          args: {
            name: "string",
          },
        },
        {
          name: "--optimize-isoline-for",
          description:
            "Specifies the optimization criteria for when calculating an isoline. AccurateCalculation generates an isoline of higher granularity that is more precise. FastCalculation generates an isoline faster by reducing the granularity, and in turn the quality of the isoline. BalancedCalculation generates an isoline by balancing between quality and performance.  Default Value: BalancedCalculation",
          args: {
            name: "string",
          },
        },
        {
          name: "--optimize-routing-for",
          description:
            "Specifies the optimization criteria for calculating a route. Default Value: FastestRoute",
          args: {
            name: "string",
          },
        },
        {
          name: "--origin",
          description: "The start position for the route",
          args: {
            name: "list",
          },
        },
        {
          name: "--origin-options",
          description: "Origin related options",
          args: {
            name: "structure",
          },
        },
        {
          name: "--thresholds",
          description:
            "Threshold to be used for the isoline calculation. Up to 3 thresholds per provided type can be requested",
          args: {
            name: "structure",
          },
        },
        {
          name: "--traffic",
          description: "Traffic related options",
          args: {
            name: "structure",
          },
        },
        {
          name: "--travel-mode",
          description:
            "Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility.   The mode Scooter also applies to motorcycles, set to Scooter when wanted to calculate options for motorcycles.  Default Value: Car",
          args: {
            name: "string",
          },
        },
        {
          name: "--travel-mode-options",
          description:
            "Travel mode related options for the provided travel mode",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "calculate-route-matrix",
      description:
        "Calculates route matrix containing the results for all pairs of Origins to Destinations. Each row corresponds to one entry in Origins. Each entry in the row corresponds to the route from that entry in Origins to an entry in Destinations positions",
      options: [
        {
          name: "--allow",
          description: "Features that are allowed while calculating. a route",
          args: {
            name: "structure",
          },
        },
        {
          name: "--avoid",
          description:
            "Features that are avoided while calculating a route. Avoidance is on a best-case basis. If an avoidance can't be satisfied for a particular case, it violates the avoidance and the returned response produces a notice for the violation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--depart-now",
          description: "Uses the current time as the time of departure",
        },
        {
          name: "--no-depart-now",
          description: "Uses the current time as the time of departure",
        },
        {
          name: "--departure-time",
          description:
            "Time of departure from thr origin. Time format:YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm  Examples:  2020-04-22T17:57:24Z   2020-04-22T17:57:24+02:00",
          args: {
            name: "string",
          },
        },
        {
          name: "--destinations",
          description: "List of destinations for the route",
          args: {
            name: "list",
          },
        },
        {
          name: "--exclude",
          description:
            "Features to be strictly excluded while calculating the route",
          args: {
            name: "structure",
          },
        },
        {
          name: "--key",
          description:
            "Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request",
          args: {
            name: "string",
          },
        },
        {
          name: "--optimize-routing-for",
          description:
            "Specifies the optimization criteria for calculating a route. Default Value: FastestRoute",
          args: {
            name: "string",
          },
        },
        {
          name: "--origins",
          description: "The position in longitude and latitude for the origin",
          args: {
            name: "list",
          },
        },
        {
          name: "--routing-boundary",
          description:
            "Boundary within which the matrix is to be calculated. All data, origins and destinations outside the boundary are considered invalid.  When request routing boundary was set as AutoCircle, the response routing boundary will return Circle derived from the AutoCircle settings",
          args: {
            name: "structure",
          },
        },
        {
          name: "--traffic",
          description: "Traffic related options",
          args: {
            name: "structure",
          },
        },
        {
          name: "--travel-mode",
          description:
            "Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility. Default Value: Car",
          args: {
            name: "string",
          },
        },
        {
          name: "--travel-mode-options",
          description:
            "Travel mode related options for the provided travel mode",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "calculate-routes",
      description:
        "Calculates a route given the following required parameters: Origin and Destination",
      options: [
        {
          name: "--allow",
          description: "Features that are allowed while calculating. a route",
          args: {
            name: "structure",
          },
        },
        {
          name: "--arrival-time",
          description:
            "Time of arrival at the destination. Time format:YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm  Examples:  2020-04-22T17:57:24Z   2020-04-22T17:57:24+02:00",
          args: {
            name: "string",
          },
        },
        {
          name: "--avoid",
          description:
            "Features that are avoided while calculating a route. Avoidance is on a best-case basis. If an avoidance can't be satisfied for a particular case, it violates the avoidance and the returned response produces a notice for the violation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--depart-now",
          description: "Uses the current time as the time of departure",
        },
        {
          name: "--no-depart-now",
          description: "Uses the current time as the time of departure",
        },
        {
          name: "--departure-time",
          description:
            "Time of departure from thr origin. Time format:YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm  Examples:  2020-04-22T17:57:24Z   2020-04-22T17:57:24+02:00",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination",
          description:
            "The final position for the route. In the World Geodetic System (WGS 84) format: [longitude, latitude]",
          args: {
            name: "list",
          },
        },
        {
          name: "--destination-options",
          description: "Destination related options",
          args: {
            name: "structure",
          },
        },
        {
          name: "--driver",
          description: "Driver related options",
          args: {
            name: "structure",
          },
        },
        {
          name: "--exclude",
          description:
            "Features to be strictly excluded while calculating the route",
          args: {
            name: "structure",
          },
        },
        {
          name: "--instructions-measurement-system",
          description:
            "Measurement system to be used for instructions within steps in the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description:
            "Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request",
          args: {
            name: "string",
          },
        },
        {
          name: "--languages",
          description:
            "List of languages for instructions within steps in the response.  Instructions in the requested language are returned only if they are available",
          args: {
            name: "list",
          },
        },
        {
          name: "--leg-additional-features",
          description:
            "A list of optional additional parameters such as timezone that can be requested for each result.    Elevation: Retrieves the elevation information for each location.    Incidents: Provides information on traffic incidents along the route.    PassThroughWaypoints: Indicates waypoints that are passed through without stopping.    Summary: Returns a summary of the route, including distance and duration.    Tolls: Supplies toll cost information along the route.    TravelStepInstructions: Provides step-by-step instructions for travel along the route.    TruckRoadTypes: Returns information about road types suitable for trucks.    TypicalDuration: Gives typical travel duration based on historical data.    Zones: Specifies the time zone information for each waypoint",
          args: {
            name: "list",
          },
        },
        {
          name: "--leg-geometry-format",
          description:
            "Specifies the format of the geometry returned for each leg of the route. You can choose between two different geometry encoding formats.  FlexiblePolyline: A compact and precise encoding format for the leg geometry. For more information on the format, see the GitHub repository for  FlexiblePolyline .  Simple: A less compact encoding, which is easier to decode but may be less precise and result in larger payloads",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-alternatives",
          description:
            "Maximum number of alternative routes to be provided in the response, if available",
          args: {
            name: "integer",
          },
        },
        {
          name: "--optimize-routing-for",
          description:
            "Specifies the optimization criteria for calculating a route. Default Value: FastestRoute",
          args: {
            name: "string",
          },
        },
        {
          name: "--origin",
          description: "The start position for the route",
          args: {
            name: "list",
          },
        },
        {
          name: "--origin-options",
          description: "Origin related options",
          args: {
            name: "structure",
          },
        },
        {
          name: "--span-additional-features",
          description:
            "A list of optional features such as SpeedLimit that can be requested for a Span. A span is a section of a Leg for which the requested features have the same values",
          args: {
            name: "list",
          },
        },
        {
          name: "--tolls",
          description: "Toll related options",
          args: {
            name: "structure",
          },
        },
        {
          name: "--traffic",
          description: "Traffic related options",
          args: {
            name: "structure",
          },
        },
        {
          name: "--travel-mode",
          description:
            "Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility. Default Value: Car",
          args: {
            name: "string",
          },
        },
        {
          name: "--travel-mode-options",
          description:
            "Travel mode related options for the provided travel mode",
          args: {
            name: "structure",
          },
        },
        {
          name: "--travel-step-type",
          description:
            "Type of step returned by the response. Default provides basic steps intended for web based applications. TurnByTurn provides detailed instructions with more granularity intended for a turn based naviagtion system",
          args: {
            name: "string",
          },
        },
        {
          name: "--waypoints",
          description: "List of waypoints between the Origin and Destination",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "optimize-waypoints",
      description:
        "Calculates the optimal order to travel between a set of waypoints to minimize either the travel time or the distance travelled during the journey, based on road network restrictions and the traffic pattern data",
      options: [
        {
          name: "--avoid",
          description:
            "Features that are avoided while calculating a route. Avoidance is on a best-case basis. If an avoidance can't be satisfied for a particular case, this setting is ignored",
          args: {
            name: "structure",
          },
        },
        {
          name: "--departure-time",
          description:
            "Departure time from the waypoint. Time format:YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm  Examples:  2020-04-22T17:57:24Z   2020-04-22T17:57:24+02:00",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination",
          description:
            "The final position for the route in the World Geodetic System (WGS 84) format: [longitude, latitude]",
          args: {
            name: "list",
          },
        },
        {
          name: "--destination-options",
          description: "Destination related options",
          args: {
            name: "structure",
          },
        },
        {
          name: "--driver",
          description: "Driver related options",
          args: {
            name: "structure",
          },
        },
        {
          name: "--exclude",
          description:
            "Features to be strictly excluded while calculating the route",
          args: {
            name: "structure",
          },
        },
        {
          name: "--key",
          description:
            "Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request",
          args: {
            name: "string",
          },
        },
        {
          name: "--optimize-sequencing-for",
          description:
            "Specifies the optimization criteria for the calculated sequence. Default Value: FastestRoute",
          args: {
            name: "string",
          },
        },
        {
          name: "--origin",
          description: "The start position for the route",
          args: {
            name: "list",
          },
        },
        {
          name: "--origin-options",
          description: "Origin related options",
          args: {
            name: "structure",
          },
        },
        {
          name: "--traffic",
          description: "Traffic-related options",
          args: {
            name: "structure",
          },
        },
        {
          name: "--travel-mode",
          description:
            "Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility. Default Value: Car",
          args: {
            name: "string",
          },
        },
        {
          name: "--travel-mode-options",
          description:
            "Travel mode related options for the provided travel mode",
          args: {
            name: "structure",
          },
        },
        {
          name: "--waypoints",
          description: "List of waypoints between the Origin and Destination",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "snap-to-roads",
      description:
        "The SnapToRoads action matches GPS trace to roads most likely traveled on",
      options: [
        {
          name: "--key",
          description:
            "Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request",
          args: {
            name: "string",
          },
        },
        {
          name: "--snapped-geometry-format",
          description:
            "Chooses what the returned SnappedGeometry format should be. Default Value: FlexiblePolyline",
          args: {
            name: "string",
          },
        },
        {
          name: "--snap-radius",
          description:
            "The radius around the provided tracepoint that is considered for snapping.  Unit: meters  Default value: 300",
          args: {
            name: "long",
          },
        },
        {
          name: "--trace-points",
          description:
            "List of trace points to be snapped onto the road network",
          args: {
            name: "list",
          },
        },
        {
          name: "--travel-mode",
          description:
            "Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility. Default Value: Car",
          args: {
            name: "string",
          },
        },
        {
          name: "--travel-mode-options",
          description:
            "Travel mode related options for the provided travel mode",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
  ],
};
export default completionSpec;
