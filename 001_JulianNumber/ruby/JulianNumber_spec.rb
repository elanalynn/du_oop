require './JulianNumber.rb'

RSpec.describe JulianNumber do
  describe "#toJulianNumber" do
    it "returns a julian year below 1000" do
      julianNumber = JulianNumber.new
      result = julianNumber.toJulianNumber(5, 'jan', 50)
      expect(result).to eq(1739329)
    end

    it "returns a julian year for the 1900s" do
      julianNumber = JulianNumber.new
      result = julianNumber.toJulianNumber(1, 'feb', 1957)
      expect(result).to eq(2435871)
    end

    it "returns a julian year for the 1400s" do
      julianNumber = JulianNumber.new
      result = julianNumber.toJulianNumber(15, 'mar', 1492)
      expect(result).to eq(2266077)
    end

    it "returns a julian year for the 2000s" do
      julianNumber = JulianNumber.new
      result = julianNumber.toJulianNumber(25, 'dec', 2050)
      expect(result).to eq(2470168)
    end
  end
end
