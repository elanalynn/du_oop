class JulianNumber
  def toJulianNumber(day, monthName, year)
    month = monthNum(monthName)

    ( 1461 * (year + 4800 + (month - 14 ) / 12 ) ) / 4 + ( 367 * (month - 2 - 12 * ( (month - 14 ) / 12 ) ) ) / 12 - ( 3 * ( ( year + 4900 + ( month - 14 ) / 12 ) / 100 ) ) / 4 + day - 32075
  end
  
  def fromJulianNumber(julianNumber)
    l = julianNumber + 68569
    n = ( 4 * l ) / 146097
    l = l - ( 146097 * n + 3 ) / 4
    i = ( 4000 * ( l + 1 ) ) / 1461001
    l = l - ( 1461 * i ) / 4 + 31
    j = ( 80 * l ) / 2447
    day = l - ( 2447 * j ) / 80
    l = j / 11
    month = j + 2 - ( 12 * l )
    year = 100 * ( n - 49 ) + i + l
    year
  end

  private
    def monthNum(month)
      months = {
        'jan' => 1,
        'feb' => 2,
        'mar' => 3,
        'apr' => 4,
        'may' => 5,
        'jun' => 6,
        'jul' => 7,
        'aug' => 8,
        'sep' => 9,
        'oct' => 10,
        'nov' => 11,
        'dec' => 12
      }
      
      months[month]
    end
end
