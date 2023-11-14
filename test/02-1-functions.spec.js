describe("formatTime function", () => {
  it("should correctly format time for a range of seconds", () => {
    expect(formatTime(125)).toEqual("02:05");
    expect(formatTime(60)).toEqual("01:00");
    expect(formatTime(59)).toEqual("00:59");
    expect(formatTime(0)).toEqual("00:00");
    // Add more cases as needed
  });
});

describe("countUp function", () => {
  it("should count up to the specified number of seconds and log each second", (done) => {
    spyOn(console, "log");
    countUpTo(3);
    setTimeout(() => {
      expect(console.log).toHaveBeenCalledWith("Elapsed time: 00:01");
      expect(console.log).toHaveBeenCalledWith("Elapsed time: 00:02");
      expect(console.log).toHaveBeenCalledWith("Elapsed time: 00:03");
      expect(console.log).toHaveBeenCalledWith("Time's up!");
      done();
    }, 3500); // Slightly more than 3 seconds to ensure all intervals have run
  });
});
