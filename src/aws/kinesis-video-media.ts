const completionSpec: Fig.Spec = {
  name: "kinesis-video-media",
  description: null,
  subcommands: [
    {
      name: "get-media",
      description:
        'Use this API to retrieve media content from a Kinesis video stream. In the request, you identify the stream name or stream Amazon Resource Name (ARN), and the starting chunk. Kinesis Video Streams then returns a stream of chunks in order by fragment number.  You must first call the GetDataEndpoint API to get an endpoint. Then send the GetMedia requests to this endpoint using the --endpoint-url parameter.   When you put media data (fragments) on a stream, Kinesis Video Streams stores each incoming fragment and related metadata in what is called a "chunk." For more information, see PutMedia. The GetMedia API returns a stream of these chunks starting from the chunk that you specify in the request.  The following limits apply when using the GetMedia API:   A client can call GetMedia up to five times per second per stream.    Kinesis Video Streams sends media data at a rate of up to 25 megabytes per second (or 200 megabits per second) during a GetMedia session.     If an error is thrown after invoking a Kinesis Video Streams media API, in addition to the HTTP status code and the response body, it includes the following pieces of information:     x-amz-ErrorType HTTP header \u2013 contains a more specific error type in addition to what the HTTP status code provides.     x-amz-RequestId HTTP header \u2013 if you want to report an issue to AWS, the support team can better diagnose the problem if given the Request Id.   Both the HTTP status code and the ErrorType header can be utilized to make programmatic decisions about whether errors are retry-able and under what conditions, as well as provide information on what actions the client programmer might need to take in order to successfully try again. For more information, see the Errors section at the bottom of this topic, as well as Common Errors',
      options: [
        {
          name: "--stream-name",
          description:
            "The Kinesis video stream name from where you want to get the media content. If you don't specify the streamName, you must specify the streamARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-arn",
          description:
            "The ARN of the stream from where you want to get the media content. If you don't specify the streamARN, you must specify the streamName",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-selector",
          description:
            "Identifies the starting chunk to get from the specified stream",
          args: {
            name: "structure",
          },
        },
        {
          name: "outfile",
          description: "Filename where the content will be saved",
          args: {
            name: "string",
          },
        },
      ],
    },
  ],
};
export default completionSpec;
